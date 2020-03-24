const express = require('express');

//Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Operações para Ongs (Criação e Listagem)
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

// Operações para os Casos (Criação, Listagem e Delete)
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// Lista casos de uma ong especifica
routes.get('/profile', ProfileController.index);

// Rota de Login (Criando uma sessão)
routes.post('/sessions', SessionController.store);

module.exports = routes;