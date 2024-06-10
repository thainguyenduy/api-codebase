import { IResponse } from 'src/shared/boundaries/interface.response';

export class CreateUserResponse implements IResponse {
  constructor(
    public name: string,
    public email: string,
  ) {}
}
