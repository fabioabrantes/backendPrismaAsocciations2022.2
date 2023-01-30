import {prisma} from '../../../database/prismaClient';
import {AssociationDTO} from "../../../dto/AssociationDTO";

import { AppErrors } from "../../../errors/AppErros";

class ListAllUseCase{
  
  async execute(){
      
    const associations:AssociationDTO[] = await prisma.association.findMany({
      include:{
        image:true,
      }
    });  

    return associations;
  }
}
export {ListAllUseCase}