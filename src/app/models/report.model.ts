export interface Report {
    id: string;
    date: Date;
    time: Date, 
    propertyId: string,
    propertyName: string,
    propertyAddress: string, 
    tasks: any,
    mapImage: any,
    creator: string,
    mapZoom: number
  }
