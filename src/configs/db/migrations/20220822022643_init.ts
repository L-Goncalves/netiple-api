import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.string('email').notNullable().unique();
        table.string('username').notNullable().unique();
        table.string('name');
        table.timestamps(true, true)
    })  
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
