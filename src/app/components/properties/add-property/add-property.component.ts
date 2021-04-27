
import {
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  
} from '@angular/core';
import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';

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
  
  // public AddressChange(address: any) {
  //   this.address=address.formatted_address
  // }
  
  isLoading: Boolean = true;
  enteredName: string = '';
  address: string = '';
  private mode = 'add';
  private propertyId: any;
  public property!: Property;
  form!: FormGroup;

  constructor(
    public propertyService: PropertyService,
    public route: ActivatedRoute,
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

    });
    //<=== Form Controls

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('propertyId')) {
        this.mode = 'edit';
        // get id from url
        this.propertyId = this.route.snapshot.paramMap.get('propertyId');
        this.propertyService
          .getProperty(this.propertyId)
          .subscribe((propertyData) => {
            this.property = {
              id: propertyData._id,
              name: propertyData.name,
              address: propertyData.address,
              latitude: this.latitude, 
              longitude: this.longitude
            };
            // populates form for editing =>
            this.form.setValue({
              name: this.property.name,
              address: this.property.address,
            });
          });
      } else {
        this.mode = 'add';
        this.propertyId = null;
      }
    });
  }

  // shortcut for form fields template access for validators

  get getControl() {
    return this.form.controls;
  }

  onSubmit() {
    console.log('form submission', this.form);
  }

  onSaveProperty() {
    if (this.form.invalid) {
      console.log('form is invalid');
      return;
    }
    if (this.mode === 'add') {
      this.propertyService.addProperty(
        this.form.value.name,
        this.address, this.latitude, this.longitude)
        console.log('add property address', this.address, this.latitude, this.longitude)
        console.log('form.value.address:', this.form.value.address)
      ;
    } else {
      this.propertyService.updateProperty(
        this.propertyId,
        this.form.value.name,
        this.form.value.address,
        this.latitude, 
        this.longitude
      );
    }
    this.form.reset();
  }

  onGermanAddressMapped($event: any) {

    this.address = $event.displayAddress
    this.latitude = $event.geoLocation?.latitude;
    this.longitude = $event.geoLocation?.longitude;
    console.log('german address mapped $event:', $event);
    console.log('this.address', this.address, this.latitude, this.longitude)
    console.log('type of address', typeof(this.address))
  
    // returns address as string

  }

  }


