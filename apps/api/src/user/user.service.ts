import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import { Repository} from "typeorm";
import {CreateUserPayload} from "./dto/createUserPayload";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  async findOne(userId: number) {
    return await this.repository.findOne(
      {
        where: { id: userId }
      })
  }

  async findOneWithEmail(email: string) {
    return await this.repository.findOne(
      {
        where: { email: email }
      }
    )
  }

  async findOneWithUserName(userName: string) {
    return await this.repository.findOne(
      {
        where: { userName: userName }
      }
    )
  }

  async create(payload: CreateUserPayload) {

    if(await this.findOneWithEmail(payload.email) || await this.findOneWithUserName(payload.userName)) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user = this.repository.create({
      userName: payload.userName,
      password: payload.password,
      email: payload.email
    });

    await this.repository.save(user);

    const { password , ...result } = user;

    return result;
  }
}
