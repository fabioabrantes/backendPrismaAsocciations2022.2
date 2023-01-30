import {Request, Response} from 'express';
import {ListAllUseCase} from './ListAllUseCase';
import associationView from '../../../views/association_view';
;

class ListAllController{

  async handle(request: Request, response: Response):Promise<Response>{
   
    const listAllUseCase = new ListAllUseCase();
    const associations = await listAllUseCase.execute();

    return response.status(201).json(associationView.renderManyAssociation(associations));
  }
}

export {ListAllController}