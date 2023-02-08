import * as Yup from 'yup';
import { ValidationError } from 'yup';
import {AssociationDTO} from "../dto/AssociationDTO";


export async function associationValidate(dataAssociation:AssociationDTO):Promise<void>{
  // Fazendo o schema
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    about: Yup.string().max(300),
    instructions: Yup.string(),
    opening_hours: Yup.string(),
    open_on_weekends: Yup.string(),
    images: Yup.array(
      Yup.object().shape({
        path: Yup.string().required(),
      })
    ),
  });
  
  try {
    //validando com o validate do schema
    await schema.validate(dataAssociation,{ abortEarly: false,});// aqui tras todas as mensagens onde teve errors
  } catch (error:any) {
    throw new ValidationError(error)
  }

}