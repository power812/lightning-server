import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }
  @Post()
  addUser() {
    return {
      code: 0,
      data: [],
      msg: 'success',
    };
  }
}
