const connection = require('../database/conection');

module.exports = {

    async index(request, response) {

        const barbers = await connection('barbers')
        .select( 
            'users.id as user_id',
            'barbershops.id as barbershop_id',
            'barbershops.name as barbershop_name', 
            'users.name',
            'users.surname',
            'users.cpf',
            'users.email',
            'users.phone_number',
            'users.gender',
            'status'
        )
        .join('users', {'barbers.user_id' : 'users.id'})
        .join('barbershops', {'barbers.barbershop_id': 'barbershops.id'});

        return response.json(barbers);

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

        const barbershop_id = request.headers.authorization;

        const [user_id] = await connection('users').insert({
            cpf,
            name,
            email,
            gender,
            status,
            surname, 
            password,
            phone_number
        });

        const [id] = await connection('barbers').insert({
            user_id : user_id,
            barbershop_id: barbershop_id
        });
        
        return response.json({ id });

    }

}