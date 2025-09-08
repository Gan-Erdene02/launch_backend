import { Injectable } from '@nestjs/common';
import { UserModel } from './schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  public async find() {
    return await UserModel.find()
  }

  public async create(body: any) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    console.log(hashedPassword, '---hashedPassword---')
    return UserModel.create({ username: body.username, password: hashedPassword });
  }

  public async findByUsername(username: string) {
    return UserModel.findOne({ username });
  }

  public async validatePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
