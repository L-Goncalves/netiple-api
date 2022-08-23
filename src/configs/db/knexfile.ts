import path from "path";
import 'ts-node/register';
import * as dotenv from 'dotenv';
import { Knex } from "knex";

// Update with your config settings.

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      port: 5432,
      host: process.env.DATABASE_URL || '',
      database: process.env.DB_NAME || '',
      user: process.env.DB_USERNAME || '',
      password: process.env.DB_PASS || '',
      ssl:  { rejectUnauthorized: false }
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, './migrations') 
    },
    pool: {
      min: 2,
      max: 10
    },
  
  },
};

export default config;

module.exports = config;
