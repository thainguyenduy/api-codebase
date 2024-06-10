import { Module } from '@nestjs/common';
import { UserController } from '../interfaces/user.controller';
import { UserGateway } from './user.gateway';

@Module({
  controllers: [UserController],
  providers: [{ provide: 'IUserGateway', useClass: UserGateway }],
})
export class UserModule {}
