import { Module } from '@nestjs/common';
import { UserController } from '../interfaces/user.controller';
import { UserFactory } from '../domains/user_factory';
import { UserRepositoryImpl } from './user_repository_impl';
import { CqrsModule } from '@nestjs/cqrs';
import { CatFactory } from 'src/cat/domains/cat_factory';
import { CatRepositoryImpl } from 'src/cat/infrastructures/cat_repository_impl';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    UserFactory,
    CatFactory,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
    {
      provide: 'CatRepository',
      useClass: CatRepositoryImpl,
    },
  ],
})
export class UserModule {}
