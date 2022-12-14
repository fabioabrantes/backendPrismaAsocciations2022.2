import {Request, Response} from 'express';
import {ListDetailUseCase} from './ListDetailUseCase';
import associationView from '../../../views/association_view';

class ListDetailController{

  async handle(request: Request, response: Response):Promise<Response>{
    const {id} = request.params;
    
    const listDetailUseCase = new ListDetailUseCase();
    
    const association = await listDetailUseCase.execute(Number(id));
    
    return response.status(201).json(associationView.renderAssociation(association));
  }
}

export {ListDetailController}