import { IInputBoundary } from 'src/shared/boundaries/interface.input_boundary';
import { CreateUserRequest } from './create_user.request';
import { CreateUserResponse } from './create_user.response';
import { IOutputBoundary } from 'src/shared/boundaries/interface.output_boundary';
import { User } from 'src/user/entities/user';
import { IUserGateway } from '../boundaries/i_user.gateway';

export class CreateUserInteractor
  implements IInputBoundary<CreateUserRequest, CreateUserResponse>
{
  constructor(private gateway: IUserGateway) {}
  async execute(
    request: CreateUserRequest,
    outputBoundary: IOutputBoundary<CreateUserResponse>,
  ): Promise<void> {
    try {
      const user = new User({ ...request, id: Math.random().toString() });
      user.initialEmail();
      await this.gateway.createUser(user);
      outputBoundary.setResponse(new CreateUserResponse(user.name, user.email));
      outputBoundary.setSuccess();
    } catch (error) {
      outputBoundary.setErrors([error]);
    }
  }
}
