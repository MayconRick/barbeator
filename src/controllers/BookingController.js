const connection = require('../database/conection');

module.exports = {
    
    async index(request, response) {

        const booking = await connection('booking').select("*");

        return response.json(booking);

    },

    async create(request, response) {
        const { 
            barber_tasks_id,
            barber_id,
            booking_at,
        } = request.body;

        const client_id = request.headers.user_id;
        
        const [id] = await connection('booking').insert({
            client_id,
            barber_id,
            booking_at,
            barber_tasks_id
        });
        
        return response.json({ id });
        
    }
    
};