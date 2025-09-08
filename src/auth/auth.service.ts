import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async login(body: any) {
    const { username, password } = body
    if (!username) throw new ForbiddenException('Хэрэглэгчийн нэр оруулна уу !')
    if (!password) throw new ForbiddenException('Нууц үг оруулна уу !')
    const user: any = await this.userService.findByUsername(username)
    if (!user) {
      throw new ForbiddenException('Хэрэглэгч олдсонгүй')
    }
    const data = await bcrypt.compare(password, user.password);
    if (data === false) {
      throw new ForbiddenException('Нууц үг буруу байна !')
    }
    return {
      access_token: this.jwtService.sign({ _id: user._id, username: user.username })
    };
  }

}
