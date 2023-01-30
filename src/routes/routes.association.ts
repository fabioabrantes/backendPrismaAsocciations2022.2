import {Router} from 'express';

import multer from 'multer';
import uploadConfig from '../config/upload';

import {CreateController} from '../modules/association/create/CreateController';
import {ListDetailController} from '../modules/association/listDetail/ListDetailController'
import {ListAllController} from '../modules/association/ListAll/ListAllController';


const routesAssociation = Router();
const upload = multer(uploadConfig);

const createController = new CreateController();
const listDetailController = new ListDetailController();
const listAllController = new ListAllController();

routesAssociation.post('/associations/register',upload.array('images'),createController.handle);
routesAssociation.get('/associations/detail/:id',listDetailController.handle);
routesAssociation.get('/associations/all',listAllController.handle);


export {routesAssociation}