
exports.up = function(knex) {
    return knex.schema.createTable('barbers', function(table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('barbershop_id').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('barbershop_id').references('id').inTable('barbershop');
        table.foreign('user_id').references('id').inTable('users');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('barbers');
 
};
