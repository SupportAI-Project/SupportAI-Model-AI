import { Role } from './role.enum';

export interface Message {
  name: string;
  content: string;
  role: Role;
  isSupportSender?: boolean;
}
