
exports.up = function(knex) {
    return knex.schema.createTable('barber_tasks', function(table) {
        table.increments();
        table.integer('barber_id').notNullable();
        table.string('label').notNullable();
        table.string('description').notNullable();
        table.decimal('price').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('barber_id').references('id').inTable('barbers');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('barber_tasks');
 
};
