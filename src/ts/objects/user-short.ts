import { Role } from './role';

export interface UserShort {
  role: Role,
  ucid: string,
  name: {
    title: string,
    firstname: string,
    surname: string,
  },
}
