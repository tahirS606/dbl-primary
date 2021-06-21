import { Property } from './property.model';

export interface Report {
    id: string;
    date: Date;
    property: Property[]
    tasks: any
  }
