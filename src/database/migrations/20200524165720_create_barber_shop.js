
exports.up = function(knex) {
    return knex.schema.createTable('barbershops', function(table) {
		table.increments();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.string('phone_number').notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
        
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('barbershops');
};
