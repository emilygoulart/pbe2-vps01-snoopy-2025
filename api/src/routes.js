const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/controllerclientes');
const Telefone = require('./controllers/controllertelefone');
const Pedido = require('./controllers/controllerpedidos');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'SNOOPY PetShop' });
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

routes.post('/telefones', Telefone.create);
routes.get('/telefones', Telefone.read);
routes.put('/telefones/:id', Telefone.update);
routes.delete('/telefones/:id', Telefone.remove);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.put('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

module.exports = routes;