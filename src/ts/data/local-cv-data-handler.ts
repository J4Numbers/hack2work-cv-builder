import StandardCvDataHandler from './standard-cv-data-handler';
import { UserDetails } from '../objects/user-details';
import loggingEngine from '../logger/bunyan-logger';
import { Role } from '../objects/role';

const log = loggingEngine();

export default class LocalCvDataHandler extends StandardCvDataHandler {
  private userDetails: Array<UserDetails>;

  constructor() {
    super();
    this.userDetails = [
      {
        ucid: 'abc123',
        name: {
          title: 'Mr',
          firstname: 'Joe',
          surname: 'Hodgeson',
        },
        role: Role.CLAIMANT,
        keyDetails: [],
        cvTemplates: [],
      },
      {
        ucid: 'def456',
        name: {
          title: 'Miss',
          firstname: 'Leanne',
          surname: 'Clarke',
        },
        role: Role.WORK_COACH,
        keyDetails: [],
        cvTemplates: [],
      },
    ];
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

  async uploadSingleUser(userDetails: UserDetails): Promise<UserDetails> {
    this.userDetails = this.userDetails.filter((oneUser) => oneUser.ucid !== userDetails.ucid);
    this.userDetails.push(userDetails);
    return userDetails;
  }
}
