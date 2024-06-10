import { UnprocessableEntityException } from '@nestjs/common';
import { ValueObject } from './value_object';

export interface IEmailProps {
  value: string;
}

export class Email extends ValueObject<IEmailProps> {
  get value(): any {
    return this.props.value;
  }
  public static phoneLength: number = 10;
  private static isValidEmail(email: string) {
    const emailPattern = /^[\w\.-]+@fpt\.com$/;
    return emailPattern.test(email);
  }
  public static create(props: IEmailProps): Email {
    if (!props.value)
      throw new UnprocessableEntityException(
        'Domain-ValueObject: Email could not be empty!',
      );
    if (!Email.isValidEmail(props.value))
      throw new UnprocessableEntityException(
        `Domain-ValueObject: Email ${props.value} is not valid!`,
      );
    return new Email({
      value: props.value,
    });
  }
}
