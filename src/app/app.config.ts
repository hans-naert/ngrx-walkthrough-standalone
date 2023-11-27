import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideState } from '@ngrx/store';
import { booksReducer } from '../store/books.reducer';
import { collectionReducer } from '../store/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideStore(), provideState({name:'books', reducer: booksReducer}), provideState({name:'collection', reducer: collectionReducer})]
};
