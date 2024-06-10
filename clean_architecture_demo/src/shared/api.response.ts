import { IOutputBoundary } from './boundaries/interface.output_boundary';
import { IResponse } from './boundaries/interface.response';

export class APIResponse<T extends IResponse> implements IOutputBoundary<T> {
  statusCode: number;
  response: T;
  errors: Error[];
  success: boolean;
  setResponse(response: T): void {
    this.response = response;
  }
  setErrors(errors: Error[]): void {
    this.statusCode = 400;
    this.success = false;
    this.errors = errors;
  }
  setSuccess(): void {
    this.statusCode = 200;
    this.success = true;
  }
  output(): any {
    if (!this.success) {
      return { statusCode: this.statusCode, errors: this.errors };
    }
    return { statusCode: this.statusCode, payload: this.response };
  }
}
