/* eslint-disable @typescript-eslint/no-unused-vars */

import { ICat } from '../domains/cat';
import { ICatRepository } from '../domains/cat_repository';

export class CatRepositoryImpl implements ICatRepository {
  save(cat: ICat): Promise<ICat> {
    return;
  }
  findById(id: string): Promise<ICat | null> {
    return;
  }
}
