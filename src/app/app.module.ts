import { MyMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { LoginComponent } from './registration/login/login.component';
import {} from '@google/maps';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MapComponent, LoginComponent],
  imports: [
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqTb16DbEQ24PiFSgWdG-uQt9GJWdCe0s',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
