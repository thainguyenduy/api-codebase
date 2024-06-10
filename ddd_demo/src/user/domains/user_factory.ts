import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { IUser, User } from './user';
import { Id } from 'src/shared/value_objects/id';

type CreateUserOptions = Readonly<{
  name: string;
}>;

export class UserFactory {
  @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;
  create(options: CreateUserOptions): IUser {
    const id = Id.create();

    return this.eventPublisher.mergeObjectContext(
      new User({
        ...options,
        id,
      }),
    ) as IUser;
  }

  reconstitute(properties: any): IUser {
    return this.eventPublisher.mergeObjectContext(
      new User(properties),
    ) as IUser;
  }
}
