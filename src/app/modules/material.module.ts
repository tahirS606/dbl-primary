import { AgmDrawingModule } from '@agm/drawing';

// agm drawing module

import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';

@NgModule({
  imports: [
    AgmDrawingModule, 
    MatButtonModule,
    MatCheckboxModule, 
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGoogleMapsAutocompleteModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    AgmDrawingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGoogleMapsAutocompleteModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
})
export class MyMaterialModule {}
