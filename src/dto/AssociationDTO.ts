import {Association} from '@prisma/client';

export interface Image{
  id: number;
  path: string;
}

export type AssociationDTO = Association & {
  image:Image[];
}