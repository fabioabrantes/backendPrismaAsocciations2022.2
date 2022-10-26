import {prisma} from '../../../database/prismaClient';

import {AssociationDTO} from "../../../dto/AssociationDTO";

import {associationValidate} from '../../../utils/associationValidate';
import { AppErrors } from "../../../errors/AppErros";

class CreateUseCase{
  
  async execute(associationParams:AssociationDTO){

    // validando os campos
   

    //Não é permitido cadastrar associação com mesmo nome. verificar se existe
   
    const association = {}

    return association
  }
}
export {CreateUseCase}