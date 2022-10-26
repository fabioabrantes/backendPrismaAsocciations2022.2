import {prisma} from '../../../database/prismaClient';

import { AppErrors } from "../../../errors/AppErros";
import {AssociationDTO} from "../../../dto/AssociationDTO";

class ListDetailUseCase{
  
  async execute(id:number){

    
        
    //verificar se existe a association pelo id
    const associationExists={}
    
    return associationExists;
  }
}
export {ListDetailUseCase}