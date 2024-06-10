/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUser } from '../domains/user';
import { IUserRepository } from '../domains/user_repository';

export class UserRepositoryImpl implements IUserRepository {
  save(user: IUser): Promise<IUser> {
    return;
  }
  findById(id: string): Promise<IUser | null> {
    return;
  }
}
