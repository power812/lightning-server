import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return {
      code: 0,
      data: [],
      msg: 'succefdfss',
    };
  }
}
