import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../dto/register-dto';
import { getHashPassword } from './utils/hash-password';
import { UsersRepository } from '../repositories/users.repository';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtStrategy: JwtStrategy,
  ) {}

  public async createUser(userData: RegisterDto) {
    const passwordHash: string = await getHashPassword(userData.password);
    await this.usersRepository.createUser({
      ...userData,
      password: passwordHash,
    });
    // const { refreshToken, accessToken } = await this.jwtStrategy.generateToken()
  }
}
