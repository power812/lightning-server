import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/loginSSO')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }
  @Post()
  loginSSO() {
    return {
      success: true,
      data: [],
      msg: '请求成功',
    };
  }
}
