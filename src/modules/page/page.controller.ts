import {
  Controller,
  Get,
  Post,
  Query,
  Delete,
  Body,
  Param,
  Headers,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { PageService } from './page.service';

@ApiBearerAuth()
@ApiTags('page')
@Controller('/page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  // 查询
  @Get()
  @ApiQuery({ name: 'id', required: false })
  @ApiResponse({
    status: 200,
    description: '...待补充',
    type: 'Application/JSON',
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    if (id === undefined) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: '页面ID必传',
          errMsg: 'id is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.pageService.fetch(id);
  }

  // 创建
  @Post()
  @ApiBody({ description: '更新内容' })
  save(@Body() { message }): string {
    return this.pageService.save(message);
  }

  // 更新
  @Post(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '更新内容' })
  update(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
    return this.pageService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.pageService.remove(id);
  }
}
