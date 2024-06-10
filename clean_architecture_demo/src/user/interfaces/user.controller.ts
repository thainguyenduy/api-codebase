import { Controller, Inject, Post, Body } from '@nestjs/common';
import { CreateUserRequest } from '../usecases/create_user/create_user.request';
import { IInputBoundary } from 'src/shared/boundaries/interface.input_boundary';
import { CreateUserInteractor } from '../usecases/create_user/create_user.usecase';
import { APIResponse } from 'src/shared/api.response';
import { CreateUserResponse } from '../usecases/create_user/create_user.response';

@Controller('user')
export class UserController {
  constructor(@Inject('IUserGateway') private readonly gateway: any) {}

  @Post()
  async createUser(@Body() userData: any): Promise<any> {
    try {
      const request: CreateUserRequest = new CreateUserRequest(
        userData.name,
        userData.email,
      );
      const interactor: IInputBoundary<CreateUserRequest, CreateUserResponse> =
        new CreateUserInteractor(this.gateway);
      const presenter = new APIResponse<CreateUserResponse>();
      await interactor.execute(request, presenter);
      return presenter.output();
    } catch (error) {
      throw error;
    }
  }
}
