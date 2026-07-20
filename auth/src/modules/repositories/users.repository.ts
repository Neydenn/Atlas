import { Inject, Injectable } from '@nestjs/common';
import { InfrastructureType } from '../../../../shared/constants/infrastructure-type';
import { Knex } from 'knex';
import { RegisterDto } from '../dto/register-dto';
import { User } from './types/user';

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

    return user;
  }
}
