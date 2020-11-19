const express = require("express");
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
const AulaQController = require('./controller/AulaQController');
const routes = express.Router();
const { response } = require("express");

routes.post('/sessions', SessionController.create);
routes.get('/aluno', OngController.index);
routes.post('/aluno', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/aula', IncidentController.index);
routes.post('/aula', IncidentController.create);
routes.get('/aula/:id', IncidentController.delete);
routes.post('/aula/questoes', AulaQController.create);
routes.patch('/aula/questoes/:id', AulaQController.patch);

module.exports = routes;
