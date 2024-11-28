import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';

import { provideState } from '@ngrx/store';
import { booksReducer } from './State/books.reducers';
import { collectionReducer } from './State/collection.reducers';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(), provideStore(), provideState({ name: 'books', reducer: booksReducer }), provideState({ name: 'collection', reducer: collectionReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
