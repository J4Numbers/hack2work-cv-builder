import StandardCvDataHandler from './standard-cv-data-handler';
import { UserDetails } from '../objects/user-details';
import loggingEngine from '../logger/bunyan-logger';

const log = loggingEngine();

export default class LocalCvDataHandler extends StandardCvDataHandler {

  private userDetails: Array<UserDetails>;

  constructor() {
    super();
    this.userDetails = [];
  }

  async getSingleUser(userId: string): Promise<UserDetails> {
    const foundDetails = this.userDetails.find((details) => details.ucid === userId);
    if (foundDetails === undefined) {
      throw new Error(`Unable to find user details for ID ${userId}`);
    }
    return foundDetails;
  }

  async getUserDetails(): Promise<Array<UserDetails>> {
    return this.userDetails;
  }
}
