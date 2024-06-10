import { IEntity } from 'src/shared/boundaries/interface.entity';

export class User implements IEntity {
  public id: string;
  public name: string;
  public email?: string;
  constructor(obj: any) {
    Object.assign(this, obj);
  }
  public initialEmail() {
    this.email = `${this.name}${this.id}@example.com`;
  }
}
