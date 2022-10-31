import {prisma} from '../../../database/prismaClient';

import { AppErrors } from "../../../errors/AppErros";
import {AssociationDTO} from "../../../dto/AssociationDTO";

class ListDetailUseCase{
  
  async execute(id:number){
      
    //verificar se existe a association pelo id
    const associationExists= await prisma.association.findFirst({
      where: {
        id
      },
      include:{
        image:{
          select:{
            id:true,
            path:true,
          }
        }
      },
      
    });
    if(!associationExists){
      throw new AppErrors("Error: Association is not exists", 404);
    }
        
    return associationExists;
  }
}
export {ListDetailUseCase}