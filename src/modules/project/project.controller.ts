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
import { ProjectService } from './project.service';

@ApiBearerAuth()
@ApiTags('project')
@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // 查询
  @Get()
  @ApiResponse({
    status: 200,
    description: '...待补充',
    type: 'Application/JSON',
  })
  fetch() {
    return this.projectService.fetchAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: '...待补充',
    type: 'Application/JSON',
  })
  getOne(@Param('id', new ParseIntPipe()) id) {
    return this.projectService.fetchOne(id);
  }

  // 创建
  @Post()
  @ApiBody({ description: '创建项目' })
  save(@Body() data) {
    return this.projectService.create(data);
  }

  // 更新
  @Post(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '更新内容' })
  update(@Param('id', new ParseIntPipe()) id, @Body() data) {
    return this.projectService.update(id, data);
  }

  // 删除
  @Delete(':id')
  @ApiParam({ name: 'id' })
  remove(@Param('id', new ParseIntPipe()) id) {
    return this.projectService.remove(id);
  }
}
