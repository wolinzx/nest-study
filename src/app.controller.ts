import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('公共接口')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:9080/app/list
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  // 可以匹配到 post请求，http://localhost:9080/app/list
  @Post('list')
  create(): string {
    return 'post test';
  }

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:9080/app/user_xxx
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  // 优先匹配
  @Put('list/user')
  updateUser() {
    return { userId: 1 };
  }

  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:9080/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update';
  }
}
