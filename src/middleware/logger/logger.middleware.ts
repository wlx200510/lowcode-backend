import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path, body, query } = req;
    console.log(`${method} ${path}`);
    console.log(
      'query:' + `${JSON.stringify(query)}`,
      'body:' + `${JSON.stringify(body)}`,
    );
    next();
  }
}
