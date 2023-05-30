import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt'
import {JwtService} from "@nestjs/jwt";
import {UserLoginPayload} from "../user/dto/userLoginPayload";

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneWithEmail(email);

    if(user && await bcrypt.compare(password, user.password)) {
       const { password, ...result } = user;
       return result;
    }
    return null;
  }

  async login(user: UserLoginPayload) {
    const validatedUser = await this.validateUser(user.email, user.password);

    if(!validatedUser) {
      throw new UnauthorizedException();
    }

    const payload = {
      username: validatedUser.email,
      sub: {
        name: validatedUser.userName
      }
    }

    return { ...user, accessToken: this.jwtService.sign(payload) }
  }
}
