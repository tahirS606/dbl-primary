import { Property } from './property.model';

export interface Route {
    id: string;
    name: number;
    properties: [Property];
    isActive: boolean; 

}