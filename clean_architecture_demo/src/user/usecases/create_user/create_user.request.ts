import { IRequest } from 'src/shared/boundaries/interface.request';

export class CreateUserRequest implements IRequest {
  constructor(
    public name: string,
    public email?: string,
  ) {}
}
