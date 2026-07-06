import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  exports: [DatabaseProvider],
  providers: [DatabaseProvider],
})
export class DatabaseModule {}
