import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }
  @Get('user/get')
  getAllUser() {
    return [
      {
        id: 1,
        name: 'power',
      },
      {
        id: 2,
        name: 'kaka',
      },
    ];
  }
  @Post('loginSSO')
  loginSSO() {
    return {
      user: {
        role: 'admin',
      },
      success: true,
      data: [],
      msg: '请求成功',
    };
  }
}
