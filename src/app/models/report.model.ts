import { Property } from './property.model';

export interface Report {
    // general
    id: string;
    date: Date;
    // property
    propertyRoute: number; 
    propertyId: string;
    propertyName: string;
    propertyAddress: string;
    // map
    propertyLatitude: number;
    propertyLongitude: number; 
    mapZoom: number;
    // tasks
    tasks: [{
            areas: [{lat: number, long:number}],
            tasksCompleted:string[];
    }]
  }
