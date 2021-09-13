
import { PropertyService } from './../../../services/property.service';

import Swal from 'sweetalert2';


import {
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  
} from '@angular/core';
import { Property } from './../../../models/property.model';


import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit, AfterViewInit{

  @Input() addressType!: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  latitude!: number;
  longitude!: number; 

  isLoading: boolean = true;
  enteredName: string = '';
  address: string = '';
  addMode: boolean = true;
  private propertyId: any;
  public property!: Property;
  form!: FormGroup;
  route!: number;

  constructor(
    public propertyService: PropertyService,
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder
  ) { }

  
  ngAfterViewInit() {

}

  ngOnInit() {
    
    //===> Form Controls
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [],
      }),
      address: new FormControl(null, {
        validators: [Validators.required],
      }),

      route: new FormControl(null, {
        validators: [],
      })
    });

    //<=== Form Controls

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('propertyId')) {
        this.propertyId = this.activatedRoute.snapshot.paramMap.get('propertyId');
        this.addMode = false;
        
        this.propertyService
          .getProperty(this.propertyId)
          .subscribe((propertyData) => {
            this.property = {
              id: propertyData._id,
              name: propertyData.name,
              address: propertyData.address,
              route: propertyData.route, 
              latitude: this.latitude, 
              longitude: this.longitude
            };
            this.form.setValue({
              name: this.property.name,
              address: this.property.address,
              route: this.property.route, 
            });
            this.form.valid;
          });
      } else {
        this.addMode = true;
        this.propertyId = null;
      }
    });
  }

  get getControl() {
    return this.form.controls;
  }

  onSaveProperty() {
    if (this.form.invalid) {
      return;
    }

    if (this.addMode) {
      this.propertyService.addProperty(
        this.form.value.name,
        this.address, 
        this.form.value.route, 
        this.latitude, 
        this.longitude)        
      ;
    } else {
      this.propertyService.updateProperty(
        this.propertyId,
        this.form.value.name,
        this.form.value.address,
        this.form.value.route, 
        this.latitude, 
        this.longitude
      );
    }
    this.form.valid;
    // this.form.reset();
    
  }

  Swal: any

  propertyAddedAlert(){
    Swal.fire('Property Added!');
  }

  onGermanAddressMapped($event: any) {
    this.address = $event.displayAddress
    this.route = $event.route
    this.latitude = $event.geoLocation.latitude;
    this.longitude = $event.geoLocation.longitude;
  }

  }


