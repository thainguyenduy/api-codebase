import { IUser } from './user';

export interface IUserRepository {
  save: (user: IUser) => Promise<IUser>;
  findById: (id: string) => Promise<IUser | null>;
}
