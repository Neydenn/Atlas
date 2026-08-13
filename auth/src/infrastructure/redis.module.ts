import { Module } from '@nestjs/common';
import { InfrastructureType } from '../modules/shared/infrastructure-type';
import Redis from 'ioredis';
import { RedisService } from '../modules/services/redis.service';

@Module({
  providers: [
    {
      provide: InfrastructureType.REDIS,
      useFactory: () =>
        new Redis({
          host: 'redis',
          port: 6379,
        }),
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule {}
