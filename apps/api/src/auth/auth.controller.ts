import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { UserLoginPayload } from "../user/dto/userLoginPayload";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: UserLoginPayload) {
    return await this.authService.login(user);
  }
}
