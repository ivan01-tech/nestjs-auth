import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtToken: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOne(username);
    if (user && user.password == pass) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.userId };

    return { access_token: this.jwtToken.sign(payload) };
  }
}
