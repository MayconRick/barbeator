const express = require('express');

const UserController = require('./controllers/UserController');
const BarberController = require('./controllers/BarberController');
const BookingController = require('./controllers/BookingController');
const TasksController = require('./controllers/BarberTasksController');
const BarbershopController = require('./controllers/BarbershopController');

const routes = express.Router();

routes.get('/barbershop', BarbershopController.index);
routes.post('/barbershop', BarbershopController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/barbers', BarberController.index);
routes.post('/barbers', BarberController.create);

routes.get('/tasks', TasksController.index);
routes.post('/tasks', TasksController.create);

routes.get('/booking', BookingController.index);
routes.post('/booking', BookingController.create);

module.exports = routes;