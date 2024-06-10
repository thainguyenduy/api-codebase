import { AggregateRoot } from '@nestjs/cqrs';
import { Email } from 'src/shared/value_objects/email';
import { Id } from 'src/shared/value_objects/id';
import { UserEmailCreatedEvent } from './events/user_email_created_event';
import { ICat } from 'src/cat/domains/cat';

export interface IUser {
  id: Id;
  initialEmail: () => void;
  adoptCat: (cat: ICat) => void;
  feedCat: (catId: string) => void;
  equals: (user: IUser) => boolean;
}

export class User extends AggregateRoot implements IUser {
  public readonly id: Id;
  private name: string;
  private email?: Email;
  private cats: ICat[];
  constructor(obj: any) {
    super();
    Object.assign(this, obj);
  }
  public initialEmail() {
    this.email = Email.create({
      value: `${this.name.split(' ').join('')}${this.id.value.substring(0, 4)}@fpt.com`,
    });
    this.apply(new UserEmailCreatedEvent(this.email!.value));
  }

  public adoptCat(cat: ICat) {
    this.cats.push(cat);
  }

  public feedCat(catId: string) {
    const cat = this.cats.find((cat) => cat.id.value === catId);
    if (cat) {
      cat.feed();
    }
  }
  public equals(user: IUser) {
    return this.id.value === user.id.value;
  }
}
