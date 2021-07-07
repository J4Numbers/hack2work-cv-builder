import { UserDetails } from '../objects/user-details';

export default abstract class StandardCvDataHandler {
  abstract getUserDetails(): Promise<Array<UserDetails>>;

  abstract getSingleUser(userId: string): Promise<UserDetails>;
}
