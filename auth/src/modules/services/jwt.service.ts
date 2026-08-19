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

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync<JwtPayload>(accessPayload, {
        secret: 'RS256',
        privateKey: this.config.get<string>('jwt.privateKey'),
        expiresIn: '1m',
      }),
      this.jwtService.signAsync<JwtPayload>(refreshPayload, {
        secret: 'RS256',
        privateKey: this.config.get<string>('jwt.privateKey'),
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
