import { User } from 'src/user/entities/user';

export interface IUserGateway {
  createUser(user: User): Promise<void>;
}
