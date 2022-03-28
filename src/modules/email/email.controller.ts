import { Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  @ApiQuery({ name: 'address', required: true })
  sendEmail(@Query() { address }): string {
    if (!address) {
      this.emailService.sendEmail(address);
      return 'default';
    }
    this.emailService.sendEmail(address);
    return 'ok';
  }
}
