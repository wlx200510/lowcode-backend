import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail(address = 'wanglixing@outlook.com') {
    this.mailerService.sendMail({
      to: address,
      from: '2084282685@qq.com',
      subject: 'Today Is Watching You ✔',
      template: 'everyDay',
    });
  }
}
