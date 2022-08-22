import type { Knex } from "knex";
import path from "path";
import 'ts-node/register';
// Update with your config settings.

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
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

module.exports = config;
