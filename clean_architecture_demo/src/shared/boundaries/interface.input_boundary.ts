import { IOutputBoundary } from './interface.output_boundary';
import { IRequest } from './interface.request';
import { IResponse } from './interface.response';

export interface IInputBoundary<T extends IRequest, U extends IResponse> {
  execute(request: T, outputBoundary: IOutputBoundary<U>): void;
}
