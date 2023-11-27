import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from '../models/books.model';
import { BooksApiActions } from '../store/books.actions';
import { selectBooks, selectBookCollection } from '../store/books.selectors';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-walkthrough-standalone';

  books$ = this.store.select(selectBooks);
  collection$ = this.store.select(selectBookCollection);

  constructor(private store: Store) {
    this.store.dispatch(BooksApiActions.retrievedBookList({books: [{id: '1', volumeInfo: {title: 'Book 1', authors: ['Author 1']}},{id: '2', volumeInfo: {title: 'Book 2', authors: ['Author 1']}}]}));
  }
}
