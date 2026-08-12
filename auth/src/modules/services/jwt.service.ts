import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import { User } from '../repositories/types/user';
import { Token } from './types/token';

@Injectable()
export class CustomJwtService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async generateToken(user: User): Promise<Token> {
    const accessPayload = {
      sub: user.id,
    };

    const refreshPayload = {
      ...accessPayload,
      jti: randomUUID(),
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload, {
        secret: this.config.get<string>('jwt.secret'),
        expiresIn: '30m',
      }),
      this.jwtService.signAsync(refreshPayload, {
        secret: this.config.get<string>('jwt.secret'),
        expiresIn: '7d',
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
