const connection = require('../database/conection');

module.exports = {

    async index(request, response) {

        const users = await connection('users').select("*");

        return response.json(users);

    },

    async create(request, response) {
        const { 
            cpf,
            name,
            email,
            gender,
            status,
            surname,
            password,
            phone_number,
        } = request.body;
        
        await connection('users').insert({
            cpf,
            name,
            email,
            gender,
            status,
            surname, 
            password,
            phone_number
        });
        
        return response.json({ id });
        
    },

    async edit(request, response) {

        const id = request.params.id;

        const {
            cpf,
            name,
            email,
            gender,
            status,
            surname,
            password,
            phone_number,
        } = request.body;

       await connection("users")
        .update({
            cpf,
            name,
            email,
            gender,
            status,
            surname,
            password,
            phone_number,
        })
        .where({id})
        .then(u => response.status(!!u?200:404).json({success:!!u}))
        .catch(e => response.status(500).json(e));

    }


};