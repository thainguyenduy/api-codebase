/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '../entities/user';
import { IUserGateway } from '../usecases/boundaries/i_user.gateway';

export class UserGateway implements IUserGateway {
  async createUser(user: User): Promise<void> {
    return;
  }
}
