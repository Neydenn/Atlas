import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import knex from 'knex';
import { InfrastructureType } from '../../../shared/constants/infrastructure-type';

export const DatabaseProvider: Provider = {
  provide: InfrastructureType.QUERY_PG,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    knex({
      client: InfrastructureType.DATABASE,
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
