import { ICat } from './cat';

export interface ICatRepository {
  save: (account: ICat) => Promise<ICat>;
  findById: (id: string) => Promise<ICat | null>;
}
