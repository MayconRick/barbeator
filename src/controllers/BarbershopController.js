const connection = require('../database/conection');


module.exports = {

    async index (request, response) {
        const barbershop = await connection('barbershops').select('*');
    
        return response.json(barbershop);
    },

    async create(request, response) {
        const {
            name, 
            email, 
            phone_number,
            street, 
            number, 
            district, 
            city, 
            uf, 
            country, 
            zipcode
        } = request.body;
    
        const [id] = await connection('barbershops').insert({
            name, 
            email, 
            phone_number
        });
    
        await connection('barbershop_address').insert({
            street, 
            number, 
            district, 
            city, 
            uf,
            country, 
            zipcode,
            barbershop_id : id
        });

        return response.json({id});

    },

    async edit(request, response) {

        const id = request.params.id;

        const {
            name, 
            email, 
            phone_number
        } = request.body;

       await connection("barbershops")
        .update({
            name, 
            email, 
            phone_number
        })
        .where({id})
        .then(u => response.status(!!u?200:404).json({success:!!u}))
        .catch(e => response.status(500).json(e));

    }

};