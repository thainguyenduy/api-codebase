import { AggregateRoot } from '@nestjs/cqrs';
import { Id } from 'src/shared/value_objects/id';
import { IUser } from 'src/user/domains/user';

export interface ICat {
  id: Id;
  adoptedBy: (user: IUser) => void;
  equals: (cat: ICat) => boolean;
  feed: () => void;
}

export class Cat extends AggregateRoot implements ICat {
  public readonly id: Id;
  private owner?: IUser;
  constructor(obj: any) {
    super();
    Object.assign(this, obj);
  }
  adoptedBy(user: IUser) {
    this.owner = user;
  }
  feed() {
    return;
  }
  public equals(cat: ICat) {
    return this.id.value === cat.id.value;
  }
}
