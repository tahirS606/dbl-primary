import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Subscription } from 'rxjs';

const GET_PROPERTIES = gql`
  query GetProperties {
    items {
      id
      name
    }
  }
`;

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit, OnDestroy {
  declare loading: boolean;
  properties: any;

  private querySubscription!: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PROPERTIES,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.properties = data.properties;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  handleThumbnailClick(eventName: string) {
    console.log(eventName);
  }
}
