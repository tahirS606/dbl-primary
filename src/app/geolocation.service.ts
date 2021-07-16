import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  corrdinates: any;
  marker: any; 
  isTracking!: boolean; 
  currentLat!: number;
  currentLong!: number;

  constructor() { }

  options: {} = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  success(pos: any): any {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  async findMe() { 
    if (window.navigator && window.navigator.geolocation)
    { navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    } else
    {console.log('error getting location')}
  }
  

async trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
        return
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  map: any

  showPosition(position:{coords: {latitude: number, longitude: number}}) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  showTrackingPosition(position: any) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

}



