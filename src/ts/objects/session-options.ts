import { ToastDetails } from './toast-details';
import { UserShort } from './user-short';

export interface SessionOptions {
  toasts?: Array<ToastDetails>,
  user?: UserShort,
}
