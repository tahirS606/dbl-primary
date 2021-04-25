import { Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
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

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit, AfterViewInit{

  @Input() addressType!: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addressText')
  
  // options:  {
  //     types: ['address'],
  //   componentRestrictions: {
  //     country: "US",
  //     state: "AZ",
  //   }
  // }
  queryWait!: boolean;
  
  public AddressChange(address: any) {
    this.enteredAddress=address.formatted_address
  }
  
  
  enteredName = '';
  enteredAddress: any = '';
  isLoading: Boolean = true;
  private mode = 'add';
  private propertyId: any;
  public property!: Property;
  form!: FormGroup;
  imagePreview!: string;

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
        validators: [Validators.required, Validators.minLength(3)],
      }),
      address: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
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
    console.log(this.form);
  }

  onSaveProperty() {
    if (this.form.invalid) {
      console.log('form is invalid');
      return;
    }
    if (this.mode === 'add') {
      this.propertyService.addProperty(
        this.form.value.name,
        this.form.value.address
      );
    } else {
      this.propertyService.updateProperty(
        this.propertyId,
        this.form.value.name,
        this.form.value.address
      );
    }
    this.form.reset();
  }
}
