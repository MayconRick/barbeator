
exports.up = function(knex) {
    return knex.schema.createTable('booking', function(table) {
        table.increments();
        table.integer('barber_id').notNullable();
        table.integer('client_id').notNullable();
        table.integer('barber_tasks_id').notNullable();
        table.timestamp('booking_at').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('barber_id').references('id').inTable('barbers');
        table.foreign('client_id').references('id').inTable('users');
        table.foreign('barber_tasks_id').references('id').inTable('barber_tasks');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('booking');
 
};
