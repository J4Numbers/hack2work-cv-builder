import { v4 as generateUuid } from 'uuid';
import mongoose, {
  Connection, ConnectionOptions, Schema, Document,
} from 'mongoose';
import StandardCvDataHandler from './standard-cv-data-handler';
import { UserDetails } from '../objects/user-details';
import loggingEngine from '../logger/bunyan-logger';

const log = loggingEngine();

export default class MongoCvDataHandler extends StandardCvDataHandler {

  private readonly uri: string;

  private readonly mongoProps?: ConnectionOptions;

  private connectionPool?: Connection;

  private readonly userDetailsSchema: Schema<UserDetails>;

  constructor(
    uri: string,
    mongoProps?: ConnectionOptions,
  ) {
    super();
    this.uri = uri;
    this.mongoProps = mongoProps;
    this.userDetailsSchema = MongoCvDataHandler.generateUserDetailsSchema();
  }

  private static generateUserDetailsSchema(): Schema<UserDetails> {
    return new Schema<UserDetails>({
      _id: { type: String, default: generateUuid },
      name: {
        title: String,
        forename: String,
        surname: String,
      },
    });
  }

  private async connectMongo(): Promise<Connection> {
    try {
      return mongoose.createConnection(this.uri, this.mongoProps);
    } catch (connectionError) {
      log.error(`Unable to establish connection with MongoDB :: ${connectionError.message}`);
      throw connectionError;
    }
  }

  private async resolveConnection(): Promise<Connection> {
    if (!this.connectionPool) {
      this.connectionPool = await this.connectMongo();
    }
    return this.connectionPool;
  }

  async getSingleUser(userId: string): Promise<UserDetails> {
    const localConnection = await this.resolveConnection();
    const userDetailsModel = localConnection.model('user-details', this.userDetailsSchema);
    const foundDetails = (
      await userDetailsModel.findOne({ ucid: userId }).exec()
    ) as (Document & UserDetails);
    if (foundDetails === null) {
      throw new Error(`Unable to find user details for ID ${userId}`);
    }
    return foundDetails;
  }

  async getUserDetails(): Promise<Array<UserDetails>> {
    const localConnection = await this.resolveConnection();
    const userDetailsModel = localConnection.model('user-details', this.userDetailsSchema);
    return (
      await userDetailsModel.find().exec()
    ) as (Document & UserDetails)[];
  }
}
