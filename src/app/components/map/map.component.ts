import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import Map from 'ol/Map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'], 
  
})
  
export class MapComponent {

  latitude: number = 51.509865;
  longitude: number = -0.118092;
  // mapType = 'SATELLITE';

  // @Input() map!: Map;
  // constructor(private elementRef: ElementRef) {

  
  // this.map.setTarget(this.elementRef.nativeElement);

}


