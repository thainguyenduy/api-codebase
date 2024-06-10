import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserEmailCreatedEvent } from 'src/user/domains/events/user_email_created_event';
import { EmailService } from 'src/user/infrastructures/services/email_service';

@EventsHandler(UserEmailCreatedEvent)
export class UserEmailCreatedHandler
  implements IEventHandler<UserEmailCreatedEvent>
{
  constructor(@Inject() private readonly emailService: EmailService) {}
  handle(event: UserEmailCreatedEvent) {
    this.emailService.sendEmail(event.email, 'test', 'test');
    console.log(this.emailService.getSentEmails());
  }
}
