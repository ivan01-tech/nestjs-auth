import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { jwtConstants } from '../utils/constants';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // supplie the method by wich the JWT will be extracted from the request
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  async validate(params: any) {
    return { userId: params.sub, username: params.username };
  }
}
