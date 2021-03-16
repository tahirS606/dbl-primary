import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

const properties = gql`
  query getProperties {
    items {
      id
      name
    }
  }
`;

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css'],
})
export class SearchPropertiesComponent implements OnInit {
  constructor(private apollo: Apollo) {
    console.log(properties);
  }

  ngOnInit(): void {}
}
