import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  Swal: any

  notOnSiteAlert(){
    Swal.fire('You are not on site! (Or your location services are turned off). Please go to the site to submit a report.')
  }
  
  reportSavedAlert(){
    Swal.fire('Report Saved!');
  }
  
  successNotification(){
    Swal.fire('Hi', 'We have been informed!', 'success')
  }
  
  alertConfirmation(){
    Swal.fire({
      title: 'Ready to submit?',
      text: 'Report cannot be edited once submitted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save report.',
      cancelButtonText: 'Go back to editing'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Thank you!',
          'Report Submitted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Ok',
          'Complete report and then save.)',
          'error'
        )
      }
    })
  }  

  constructor() { }
}
