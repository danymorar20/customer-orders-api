import { registerAs } from '@nestjs/config';

export const MySQLConfig = registerAs('mysql', () => {
  const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

  return {
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT ? parseInt(DB_PORT, 10) : 3306,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    autoLoadEntities: true,
    synchronize: false, // The database is assumed to already exist, otherwise set to true.
    logging: true, // Set to true only for practical purposes of the technical test
    timezone: 'Z',
  };
});
