import { Role } from './role';
import { KeyDetails } from './key-details';
import {UserShort} from './user-short';

export interface UserDetails extends UserShort{
  role: Role,
  ucid: string,
  name: {
    title: string,
    firstname: string,
    surname: string,
  },
  keyDetails: KeyDetails,
  cvTemplates: [],
}
