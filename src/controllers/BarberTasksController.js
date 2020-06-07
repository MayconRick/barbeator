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
        
    },

    
    async edit(request, response) {

        const id = request.params.id;

        const {
            price,
            label,
            barber_id,
            description
        } = request.body;

       await connection("barber_tasks")
        .update({
            price,
            label,
            barber_id,
            description
        })
        .where({id})
        .then(u => response.status(!!u?200:404).json({success:!!u}))
        .catch(e => response.status(500).json(e));

    }

}