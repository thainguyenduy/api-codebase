export class EmailService {
  private sentEmails: Array<{
    recipient: string;
    subject: string;
    body: string;
  }> = [];

  sendEmail(recipient: string, subject: string, body: string): boolean {
    this.sentEmails.push({ recipient, subject, body });
    return true;
  }

  getSentEmails(): Array<{ recipient: string; subject: string; body: string }> {
    return this.sentEmails;
  }
}
