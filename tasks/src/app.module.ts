import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
