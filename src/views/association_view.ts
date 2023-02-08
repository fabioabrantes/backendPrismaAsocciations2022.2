import {AssociationDTO, Image} from '../dto/AssociationDTO';


interface IImage{
  id:number;
  url:string;
}

export default {
  renderManyAssociation(associations: AssociationDTO[]) {
    return associations.map(association => this.renderAssociation(association));
  },
  renderAssociation(association: AssociationDTO) {
    return {
      id: association.id,
      name: association.name,
      latitude: association.latitude,
      longitude: association.longitude,
      about: association.about,
      instructions: association.instructions,
      opening_hours: association.opening_hours,
      open_on_weekends: association.open_on_weekends,
      imagesPath: this.renderManyImages(association.image),
    };
  },
  renderImage(image: Image):IImage {
    return {
      id: image.id,
      url: `http://10.3.150.75:3333/uploads/${image.path}`, // o ideal seria colocar no .env
    };
  },
  renderManyImages(images: Image[]):IImage[] {
    return images.map((image) => this.renderImage(image));
  },
}