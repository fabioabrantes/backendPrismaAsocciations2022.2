import {Request, Response} from 'express';
import {CreateUseCase} from './CreateUseCase';
import {AssociationDTO} from "../../../dto/AssociationDTO";

class CreateController{

  async handle(request: Request, response: Response):Promise<Response>{
   // console.log(request.files);
    //pegar as informações pelo body
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
    } = request.body;
    
    // pegar os arquivos pelo files e transformar para o formato de array de file. Express.Multer.File[]
    //pq o multer vem com outro tipo de vetor. aqui forço que é um array de arquivos
    const imagesRequest = request.files as Express.Multer.File[];

    // passar somente o objeto conyendo o path das images para registrar na associação
    const imagesPath = imagesRequest.map((img) => ({path:img.filename}));

    const createUseCase = new CreateUseCase();

    const data = {
      name,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      about,
      instructions,
      open_on_weekends,
      opening_hours,
      image:imagesPath
    } as AssociationDTO;
    
    //console.log(data);

    const association = await createUseCase.execute(data);

    return response.status(201).json(association);
  }
}

export {CreateController}