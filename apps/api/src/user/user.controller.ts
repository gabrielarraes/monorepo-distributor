import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserPayload} from "./dto/createUserPayload";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateUserPayload) {
    return this.userService.create(payload);
  }

}
