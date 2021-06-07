import { PropertyService } from './../../../services/property.service';


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
import { GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';

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
    console.log('addMode', this.addMode)
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
        this.addMode = false;
        // get id from url
        this.propertyId = this.activatedRoute.snapshot.paramMap.get('propertyId');
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
            // populates form for editing =>
            this.form.setValue({
              name: this.property.name,
              address: this.property.address,
              route: this.property.route, 
            });
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
      console.log('form is invalid');
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
    this.form.reset();
  }

  onGermanAddressMapped($event: any) {

    this.address = $event.displayAddress
    this.route = $event.route
    this.latitude = $event.geoLocation.latitude;
    this.longitude = $event.geoLocation.longitude;
    
    console.log('this.address', this.address, this.route, this.latitude, this.longitude)
    
  }

  }


