import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auto-complete-address',
  templateUrl: './auto-complete-address.component.html',
  styleUrls: ['./auto-complete-address.component.css']
})
export class AutoCompleteAddressComponent implements OnInit, AfterViewInit {
  @Input() addressType!: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any

  autocompleteInput!: string;
  queryWait!: boolean; 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement{
      componentRestrictions: { country: 'US' },
      types: [this.addressType] // 'establishment' / 'address' / 'geocode'
    });

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    })

    
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place)
  }

}
