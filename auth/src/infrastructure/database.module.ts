import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';

@Module({
  imports: [],
  exports: [DatabaseProvider],
  providers: [DatabaseProvider],
})
export class DatabaseModule {}
