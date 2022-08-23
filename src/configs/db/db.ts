import knex from "knex";
import config from './knexfile'


console.log(config)

const db = knex(config.development);

export default db;