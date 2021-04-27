import { Component, OnInit, Input, Output, EventEmitter, NgZone, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Projection from 'ol/proj/Projection';
import { Coordinate } from 'ol/coordinate';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  @Input() center!: Coordinate;
  @Input() zoom!: number;

  view!: View;
  map: Map | undefined;
  projection!: Projection;

 

  @Output() mapReady = new EventEmitter<Map>()

  

  constructor(
    private zone: NgZone,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 17,       
        // maxZoom: 17,
        minZoom: 0,
        rotation: 0,
      }),
      layers: [

          new TileLayer({
            maxZoom: 25, // visible at zoom levels 14 and below
            source: new OSM(), 
            minZoom: 1,
          }),
        
      ],
      target: 'ol-map',
      
    });
    
  }
}


