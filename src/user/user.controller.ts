import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
