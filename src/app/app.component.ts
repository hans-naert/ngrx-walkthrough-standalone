import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from '../models/books.model';
import { BooksApiActions } from '../store/books.actions';
import { selectBooks, selectBookCollection } from '../store/books.selectors';
import { BooksService } from './services/books.service';
import { MatButtonModule } from '@angular/material/button';
import { BooksActions } from '../store/books.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-walkthrough-standalone';

  books$ = this.store.select(selectBooks);
  collection$ = this.store.select(selectBookCollection);

  constructor(private store: Store, private booksService: BooksService) {
    this.booksService.getBooks().subscribe((books) =>
    this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
  );
  }

  add( bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
}
