import Redis from 'ioredis';
import { Inject, Injectable } from '@nestjs/common';
import { InfrastructureType } from '../shared/infrastructure-type';

@Injectable()
export class RedisService {
  constructor(
    @Inject(InfrastructureType.REDIS)
    private readonly redis: Redis,
  ) {}

  public async revoke(jti: string | undefined, token: string): Promise<string> {
    return await this.redis.set(`refresh:${jti}`, token);
  }

  public async tokenIsRevoke(jti: string | undefined): Promise<boolean> {
    return !!(await this.redis.get(`refresh:${jti}`));
  }
}
