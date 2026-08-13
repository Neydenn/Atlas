import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from '../dto/register-dto';
import { getHashPassword, verifyHashPassword } from './utils/hash-password';
import { UsersRepository } from '../repositories/users.repository';
import { CustomJwtService } from './jwt.service';
import { User } from '../repositories/types/user';
import { Token } from './types/token';
import { LoginDto } from '../dto/login-dto';
import type { Request } from 'express';
import { RedisService } from './redis.service';
import { JwtPayload } from './types/jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: CustomJwtService,
    private readonly redisService: RedisService,
  ) {}

  public async createUser(userData: RegisterDto): Promise<Token> {
    const passwordHash: string = await getHashPassword(userData.password);
    const user: User = await this.usersRepository.createUser({
      ...userData,
      password: passwordHash,
    });

    const { accessToken, refreshToken } =
      await this.jwtService.generateToken(user);

    if (!accessToken && !refreshToken) {
      throw new Error('generate token error');
    }

    return { accessToken, refreshToken };
  }

  public async login(userData: LoginDto): Promise<Token> {
    const user: User = await this.usersRepository.getUserByEmail(
      userData.email,
    );

    const isValidPassword = await verifyHashPassword(
      userData.password,
      user.passwordHash,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException('Passwords do not match');
    }

    const { accessToken, refreshToken } =
      await this.jwtService.generateToken(user);

    if (!accessToken && !refreshToken) {
      throw new Error('generate token error');
    }

    return { accessToken, refreshToken };
  }

  public async validateToken(request: Request): Promise<Token> {
    const token = request.cookies?.token as string;
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }
    const jwtPayload: JwtPayload = await this.jwtService.verifyToken(token);

    if (!jwtPayload) {
      throw new UnauthorizedException('Token invalid');
    }

    const isTokenRevoke = await this.redisService.tokenIsRevoke(jwtPayload.jti);

    if (!isTokenRevoke) {
      throw new UnauthorizedException('Token is revoked!');
    }

    const user = await this.usersRepository.getUserById(jwtPayload.sub);
    const { accessToken, refreshToken } =
      await this.jwtService.generateToken(user);

    await this.redisService.revoke(jwtPayload.jti, token);
    return { accessToken, refreshToken };
  }
}
