import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://api.monday.com/v2';

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const auth = setContext((operation, context) => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEwMjgxNjk3OCwidWlkIjoyMDg0NjMyMSwiaWFkIjoiMjAyMS0wMy0xMlQxNjoyNDowMi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjQ3MzYwOCwicmduIjoidXNlMSJ9.SE459kd0eanxXgUh9b1ePNc3SP7sR-CDtMN_724bZvc';

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
