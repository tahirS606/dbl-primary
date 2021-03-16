import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css'],
})
export class SearchPropertiesComponent implements OnInit {
  constructor(private apollo: Apollo) {
    const GET_POST = gql`
      query GetPosts {
        posts {
          id
          title
        }
      }
    `;
  }

  ngOnInit(): void {}
}
