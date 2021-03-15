import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  getProperties() {
    return PROPERTIES;
  }
}

const PROPERTIES = [
  {
    id: 1,
    name: 'The Biltmore',
    address: '444 West Biltmore Ave, Phoenix, AZ',
    requiresApproval: false,
  },
  {
    id: 2,
    name: 'The Phoenix Zoo',
    address: '22 Galveston Parkway, Phoenix, AZ',
    requiresApproval: false,
  },
  {
    id: 3,
    name: 'The Harlequin Hotel',
    address: '22 Galveston Parkway, Tempe, AZ',
    requiresApproval: true,
  },
];
