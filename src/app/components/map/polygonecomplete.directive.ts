import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPolygonecomplete]'
})
export class PolygonecompleteDirective {

  @HostListener('polygoncomplete') onPolygonComplete($event:any){
    console.log($event.payload)
    console.log('polygon complete')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    console.log(eventData)
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log(eventData)
  }


  constructor() {  }

}
