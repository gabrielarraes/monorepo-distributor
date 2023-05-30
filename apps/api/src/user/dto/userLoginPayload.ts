import {IsNotEmpty, IsString} from "@nestjs/class-validator";

export class UserLoginPayload {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
