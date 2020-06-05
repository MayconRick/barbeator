
exports.up = function(knex) {
    return knex.schema.createTable('barbershop_address', function(table) {
        table.increments();
        table.integer('barbershop_id').notNullable();
        table.string('street').notNullable();
        table.string('number').notNullable();
        table.string('district').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.string('country').notNullable();
        table.string('zipcode').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('barbershop_id').references('id').inTable('barbershops');
        
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('barbershop_address');
};
