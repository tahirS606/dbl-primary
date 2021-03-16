import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css'],
})
export class SearchPropertiesComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}
}
