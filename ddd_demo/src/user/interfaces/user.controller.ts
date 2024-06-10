import { Controller, Post, Body, Inject } from '@nestjs/common';
import { UserFactory } from '../domains/user_factory';
import { IUser } from '../domains/user';
import { AdoptService } from '../domains/domain_services/adopted_service';
import { IUserRepository } from '../domains/user_repository';
import { ICatRepository } from 'src/cat/domains/cat_repository';
import { ICat } from 'src/cat/domains/cat';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserFactory) private readonly userFactory: UserFactory,
    @Inject('UserRepository') private readonly userRepository: IUserRepository,
    @Inject('CatRepository') private readonly catRepository: ICatRepository,
  ) {}
  @Post()
  async createUser(@Body() userData: any): Promise<any> {
    const user: IUser = this.userFactory.create(userData);
    user.initialEmail();
    this.userRepository.save(user);
    return user;
  }
  @Post()
  async adoptCat(@Body() request: any): Promise<any> {
    const [user, cat]: [IUser, ICat] = await Promise.all([
      this.userRepository.findById(request.id),
      this.catRepository.findById(request.catId),
    ]);
    AdoptService.adoptCat(user, cat);
    await Promise.all([
      this.userRepository.save(user),
      this.catRepository.save(cat),
    ]);
  }
  @Post()
  async feedCat(@Body() request: any): Promise<any> {
    const user: IUser = await this.userRepository.findById(request.id);
    user.feedCat(request.catId);
    this.userRepository.save(user);
  }
}
