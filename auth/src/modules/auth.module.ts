import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../infrastructure/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { UsersRepository } from './repositories/users.repository';
import { CustomJwtService } from './services/jwt.service';
import { RedisModule } from '../infrastructure/redis.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
      }),
    }),
    DatabaseModule,
    RedisModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository, CustomJwtService],
})
export class AuthModule {}
