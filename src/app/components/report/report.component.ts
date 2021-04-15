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
        center: [-12080385, 7567433],
        zoom: 3,
        maxZoom: 6,
        minZoom: 2,
        rotation: 0,
      }),
      layers: [
        new TileLayer({
           source: new OSM({
    attributions: ['Powered by Esri',
                   'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'],
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
             maxZoom: 23,
  })
        }),
          new TileLayer({
            maxZoom: 100, // visible at zoom levels 14 and below
            source: new OSM(),
            minZoom: 1,
          }),
        
      ],
      target: 'ol-map',
    });
  }
}

  
  // // map
  // const fullScreenControl = new ol.control.FullScreen();
  // const mousePositionControl = new ol.control.MousePosition();
  // const overViewMapControl = new ol.control.OverviewMap({
  //     collapsed: false,
  //     layers: [
  //         new ol.layer.Tile({
  //             source: new ol.source.OSM(),
  //         }),
  //     ],
  // });
  // const scaleLineControl = new ol.control.ScaleLine();
  // const zoomSliderControl = new ol.control.ZoomSlider();
  // const zoomToExtentControl = new ol.control.ZoomToExtent();

  // const map = new ol.Map({
     
  //     l

  // const popupContainerElement = document.getElementById("popup-coordinates");
  // const popup = new ol.Overlay({
  //     element: popupContainerElement,
  //     positioning: "top-right",
  // });

  // map.addOverlay(popup);

  // map.on("click", function(e) {
  //     const clickedCoordinate = e.coordinate;
  //     // popup.setPosition(undefined);
  //     popup.setPosition(clickedCoordinate);
  //     popupContainerElement.innerHTML = clickedCoordinate;
  // });

  // // DragRotate Interaction
  // const dragRotateInteraction = new ol.interaction.DragRotate({
  //     condition: ol.events.condition.altKeyOnly,
  // });

  // map.addInteraction(dragRotateInteraction);

  // // Draw Interaction
  // const drawInteraction = new ol.interaction.Draw({
  //     type: "Polygon",
  //     freehand: true,
  // });
  // map.addInteraction(drawInteraction);

  // drawInteraction.on("drawend", function(e) {
  //     let parser = new ol.format.GeoJSON();
  //     let drawnFeatures = parser.writeFeatures([e.feature]);
  //     console.log(drawnFeatures);
  // });

