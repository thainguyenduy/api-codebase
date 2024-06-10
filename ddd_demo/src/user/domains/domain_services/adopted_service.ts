import { ICat } from 'src/cat/domains/cat';
import { IUser } from '../user';

export class AdoptService {
  static adoptCat(user: IUser, cat: ICat) {
    user.adoptCat(cat);
    cat.adoptedBy(user);
  }
}
