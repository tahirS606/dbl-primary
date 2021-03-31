import { mimeType } from './mime-type.validator';
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
export class AddPropertyComponent implements OnInit {
  enteredName = '';
  enteredAddress = '';
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
  ) {}

  ngOnInit() {
    //===> Form Controls
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      address: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),

      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });
    //<=== Corm Controls

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

  onImagePicked(event: Event) {
    let imageFile;
    let eventCasttoHtml = event.target as HTMLInputElement;
    if (eventCasttoHtml.files) {
      imageFile = eventCasttoHtml.files[0];
      this.form.patchValue({ image: imageFile });
      this.form.get('image')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(imageFile);

      console.log(imageFile);
      console.log(this.form);
    } else {
      return;
    }
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
