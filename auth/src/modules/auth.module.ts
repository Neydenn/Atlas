import { Module } from 'node:vm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: p
    })
  ]
})