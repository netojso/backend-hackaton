import { Router } from 'express';
import SellerController from '../controllers/SellerController';
import ClientController from '../controllers/ClientController';

const sellers = new SellerController();
const clients = new ClientController();

const routes = Router();

routes.get('/sellers', sellers.getAll);

routes.get('/products/:item', clients.getItem);

routes.post('/seller', sellers.newSeller);

routes.post('/client', clients.newClient);

export default routes;
