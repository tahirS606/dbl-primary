export interface Report {
    id: string;
    date: Date;
    time: Date, 
    propertyId: string,
    propertyName: string,
    propertyAddress: string, 
    propertyLatitude: number, 
    propertyLongitude:  number, 
    areasForReport: any, 
    creator: string,
    mapZoom: number,
    // imagePreviewArray: any,
  }
