import { Injectable, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';



@Injectable({
  providedIn: 'root'
})
export class CaptureService {

  @ViewChild('screen', { static: true }) screen: any;

capture(){
  
}
  
}
