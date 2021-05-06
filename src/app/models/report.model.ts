import { Property } from './property.model';
export interface Report {
    id: string;
    date: Date; 
    Property: {
        name: string,
        address: string 
        latitude: number;
        longitude: number; 
    } 
    polygons: { coords: number[]}
    completedAt: Date;
    completedBy: string; 
    
    
  }
    // route
    // owner (current)
    // contact (email / phone?)
  
  