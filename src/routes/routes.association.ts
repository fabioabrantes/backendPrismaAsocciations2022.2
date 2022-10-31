import {Router} from 'express';

import multer from 'multer';
import uploadConfig from '../config/upload';

import {CreateController} from '../modules/association/create/CreateController';
import {ListDetailController} from '../modules/association/listDetail/ListDetailController'



const routesAssociation = Router();
const upload = multer(uploadConfig);

const createController = new CreateController();

const listDetailController = new ListDetailController();

routesAssociation.post('/associations/register',upload.array('images'),createController.handle);
routesAssociation.get('/associations/detail/:id',listDetailController.handle);


export {routesAssociation}