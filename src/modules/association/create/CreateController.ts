import {Request, Response} from 'express';
import {CreateUseCase} from './CreateUseCase';
import {AssociationDTO} from "../../../dto/AssociationDTO";


class CreateController{

  async handle(request: Request, response: Response):Promise<Response>{
    //console.log(request.files);
    //pegar as informações pelo body
    
    
    // pegar os arquivos pelo files e transformar para o formato de array de file. Express.Multer.File[]
    //pq o multer vem com outro tipo de vetor. aqui forço que é um array de arquivos
    

    // passar somente o objeto conyendo o path das images para registrar na associação
    

    const createUseCase = new CreateUseCase();

    const data = {
      
    } as AssociationDTO;
    const association = await createUseCase.execute(data);

    return response.status(201).json(association);
  }
}

export {CreateController}