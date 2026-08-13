import { Knex } from 'knex';
import { RegisterDto } from '../dto/register-dto';
import { User } from './types/user';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InfrastructureType } from '../shared/infrastructure-type';

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
      throw new NotFoundException('User does not exist');
    }

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user: User | undefined = await this.pg<User>('auth_user')
      .where('email', email)
      .first();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getUserById(id: string): Promise<User> {
    const user: User | undefined = await this.pg<User>('auth_user').where('id', id).first();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
