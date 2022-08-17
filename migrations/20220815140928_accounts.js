/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("accounts", (table) => {
        table.increments("id").primary()
        table.integer("amounts").defaultTo(0)
        
        table.integer("user_id")

        table.string("currency", 3).defaultTo("NGN") 
        table.foreign("user_id").references("id").inTable("users")
    
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
