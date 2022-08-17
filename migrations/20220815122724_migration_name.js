/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary()
    table.string("email", 255).notNullable()
    table.string("first_name", 255).notNullable()
    table.string("last_name", 255).notNullable()
    table.string("password", 255).notNullable()
    table.integer("dob", 2).notNullable()
    table.string("phonenumber", 10).notNullable()
    table.string("country", 2).defaultTo("NG")
    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
};
