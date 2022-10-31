import {prisma} from '../../../database/prismaClient';
import {AssociationDTO} from "../../../dto/AssociationDTO";

import {associationValidate} from '../../../utils/associationValidate';
import { AppErrors } from "../../../errors/AppErros";

class CreateUseCase{
  
  async execute(associationParams:AssociationDTO){
    // validando os campos
    await associationValidate(associationParams);

    //Não é permitido cadastrar associação com mesmo nome. verificar se existe
    const {name} = associationParams;
    
    const associationExists = await prisma.association.findFirst({
      where:{
        name
      }
    });

    if (associationExists){
      throw new AppErrors("Error: Association exists", 400);
    }

    const {
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      image,
    } = associationParams;

       
      const associationNew = await prisma.association.create({
        data:{
          name,
          latitude,
          longitude,
          about,
          instructions,
          opening_hours,
          open_on_weekends,
          image:{
            create:[
              ...image
            ],
          },
        },
      })
   
    return associationNew;
  }
}
export {CreateUseCase}