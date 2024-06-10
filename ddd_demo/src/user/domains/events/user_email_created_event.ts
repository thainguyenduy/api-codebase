import { IEvent } from '@nestjs/cqrs';

export class UserEmailCreatedEvent implements IEvent {
  constructor(readonly email: string) {}
}
