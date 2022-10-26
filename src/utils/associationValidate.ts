import * as Yup from 'yup';
import { ValidationError } from 'yup';
import {AssociationDTO} from "../dto/AssociationDTO";


export async function associationValidate(dataAssociation:AssociationDTO):Promise<void>{
  // Fazendo o schema
  const schema = Yup.object().shape({
    
  });
  
  try {
    //validando com o validate do schema
    await schema.validate(dataAssociation,{ abortEarly: false,});// aqui tras todas as mensagens onde teve errors
  } catch (error:any) {
    throw new ValidationError(error)
  }

}