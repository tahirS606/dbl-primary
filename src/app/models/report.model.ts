import { Property } from './property.model';

export interface Report {
    // general
    id: string;
    date: Date; 
    time: string; 
    mapZoom: number;
    completedBy: string; 
    route: number; 
    
    Property: Property;
    // tasks
    tasks: [{
        completedAt: string;
        polygon: [{     
            coords: [{lat: number, long:number}]
            tasksCompleted:string[];
            lineColor: string;
            fillColor: string; 
    }]
    }]
  }
