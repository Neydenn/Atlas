import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'node:crypto';
import { ConfigService } from '@nestjs/config';
import { User } from '../repositories/types/user';
import { Token } from './types/token';
import { JwtPayload } from './types/jwt-payload';

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
    const jwtSecret: string | undefined = this.config.get<string>('jwt.secret');

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync<JwtPayload>(accessPayload, {
        secret: jwtSecret,
        expiresIn: '30m',
      }),
      this.jwtService.signAsync<JwtPayload>(refreshPayload, {
        secret: jwtSecret,
        expiresIn: '7d',
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async verifyToken(token: string): Promise<JwtPayload> {
    return this.jwtService.verifyAsync<JwtPayload>(token, {
      secret: this.config.get<string>('jwt.secret'),
    });
  }
}
