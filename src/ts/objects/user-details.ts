import { Role } from './role';
import { KeyDetails } from './key-details';

export interface UserDetails {
  id: string,
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
