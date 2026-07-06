import { Provider } from '@nestjs/common';
import { KNEX } from './constants/knex';
import { ConfigService } from '@nestjs/config';
import knex from 'knex';

export const DatabaseProvider: Provider = {
  provide: KNEX,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    knex({
      client: 'pg',
      connection: {
        host: config.get<string>('db.host'),
        user: config.get<string>('db.user'),
        password: config.get<string>('db.password'),
        database: config.get<string>('db.name'),
        port: config.get<number>('db.port'),
      },
      pool: {
        min: 2,
        max: 10,
      },
    }),
};
