export interface Report {
    id: string;
    date: Date;
    time: Date, 
    propertyId: string,
    propertyName: string,
    propertyAddress: string, 
    // tasks: [object],
    creator: string,
    mapZoom: number,
    // imagePreviewArray: [string],
  }
