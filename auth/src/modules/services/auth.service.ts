import { HttpException, Injectable } from '@nestjs/common';
import { RegisterDto } from '../dto/register-dto';
import { getHashPassword } from './utils/hash-password';
import { UsersRepository } from '../repositories/users.repository';
import { CustomJwtService } from './jwt.service';
import { User } from '../repositories/types/user';
import { Token } from './types/token';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: CustomJwtService,
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
}
