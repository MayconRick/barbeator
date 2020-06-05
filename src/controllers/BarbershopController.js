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

    }

};