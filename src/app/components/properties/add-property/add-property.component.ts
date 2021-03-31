import { Property } from './../../../models/property.model';
import { PropertyService } from './../../../shared/property.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  enteredName = '';
  enteredAddress = '';
  isLoading: Boolean = true;
  private mode = 'add';
  private propertyId: any;
  public property!: Property;

  constructor(
    public propertyService: PropertyService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
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
          });
      } else {
        this.mode = 'add';
        this.propertyId = null;
      }
    });
  }

  // onImagePicked(event: Event) {
  //   let imageFile;
  //   let eventCasttoHtml = event.target as HTMLInputElement;
  //   if (eventCasttoHtml.files) {
  //     imageFile = eventCasttoHtml.files[0];
  //     this.form.patchValue({ image: imageFile });
  //     this.form.get('image')?.updateValueAndValidity();
  //     console.log(imageFile);
  //     console.log(this.form);
  //   } else {
  //     return;
  //   }
  // }

  onSaveProperty(form: NgForm) {
    if (form.invalid) {
      console.log('form is invalid');
      return;
    }
    if (this.mode === 'add') {
      this.propertyService.addProperty(form.value.name, form.value.address);
    } else {
      this.propertyService.updateProperty(
        this.propertyId,
        form.value.name,
        form.value.address
      );
    }
    form.resetForm();
  }
}
