import { PartialType } from "@nestjs/mapped-types";
import {IsNotEmpty, IsString} from "@nestjs/class-validator";

export class CreateUserPayload {
  @IsString()
  userName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserPayload extends PartialType(CreateUserPayload) {}
