import {Router} from 'express';

import {routesAssociation} from './routes.association';


const routes = Router();

routes.use(routesAssociation);


export {routes};