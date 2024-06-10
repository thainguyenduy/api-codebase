import { IRequest } from './interface.request';

export interface IOutputBoundary<T extends IRequest> {
  errors: Error[];
  success: boolean;
  setResponse(response: T): void;
  setErrors(errors: Error[]): void;
  setSuccess(): void;
  output(): any;
}
