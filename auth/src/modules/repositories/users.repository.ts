import { InfrastructureType } from '../../../../shared/constants/infrastructure-type';
import { Knex } from 'knex';
import { RegisterDto } from '../dto/register-dto';
import { User } from './types/user';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(
    @Inject(InfrastructureType.QUERY_PG)
    private readonly pg: Knex,
  ) {}

  async createUser(registerDto: RegisterDto): Promise<User> {
    const [user] = await this.pg<User>('auth_user')
      .insert({
        username: registerDto.username,
        email: registerDto.email,
        passwordHash: registerDto.password,
      })
      .returning('*');

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
