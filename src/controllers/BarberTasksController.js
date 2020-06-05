const connection = require('../database/conection');

module.exports = {

    async index(request, response) {

        const tasks = await connection('barber_tasks').select("*");

        return response.json(tasks);

    },

    async create(request, response) {
        const { 
            price,
            label,
            barber_id,
            description
        } = request.body;
        
        const [id] = await connection('barber_tasks').insert({
            price,
            label,
            barber_id,
            description
        });
        
        return response.json({ id });
        
    }

}