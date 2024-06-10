import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { Id } from 'src/shared/value_objects/id';
import { Cat, ICat } from './cat';

type CreateCatOptions = Readonly<{
  name: string;
}>;

export class CatFactory {
  @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;
  create(options: CreateCatOptions): ICat {
    const id = Id.create();

    return this.eventPublisher.mergeObjectContext(
      new Cat({
        ...options,
        id,
      }),
    ) as ICat;
  }

  reconstitute(properties: any): ICat {
    return this.eventPublisher.mergeObjectContext(new Cat(properties)) as ICat;
  }
}
