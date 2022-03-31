import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      credentials: true,
    },
  });
  // 全局使用中间件
  // app.use(logger)
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(bodyParser.json({ limit: '50mb' }));
  const config = new DocumentBuilder()
    .setTitle('nestjs的API文档')
    .setDescription('低代码swaggeer接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(4000);
}
bootstrap();
