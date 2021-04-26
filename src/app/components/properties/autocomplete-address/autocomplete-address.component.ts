import { Component, Input, Output, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-address',
  templateUrl: './autocomplete-address.component.html',
  styleUrls: ['./autocomplete-address.component.css']
})
export class AutocompleteAddressComponent implements OnInit, AfterViewInit {

  @Input() addressType!: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  autocompleteInput?: string;
  queryWait?: boolean; 


  constructor() { }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  ngOnInit(): void {
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
      componentRestrictions: { country: 'US' },
      types: [this.addressType]
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
