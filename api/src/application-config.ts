import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export interface ApplicationConfig {
  database: TypeOrmModuleOptions;
}

export const applicationConfig = (): ApplicationConfig => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      database: {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
        extra: {
          charset: 'utf8_unicode_ci',
        },
      },
    };
  }

  return {
    database: {
      type: 'postgres',
      host: `/cloudsql/${process.env.DATABASE_CONNECTION_NAME}`,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
      extra: {
        charset: 'utf8_unicode_ci',
        socketPath: `/cloudsql/${process.env.DATABASE_CONNECTION_NAME}`,
      },
    },
  };
};
