import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserService} from "../user/user.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import * as process from "process";
import {LocalStrategy} from "./strategies/local-strategy";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";

@Module({
  providers: [AuthService, UserService, LocalStrategy],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '3600s' }
    })
  ]
})
export class AuthModule {}
