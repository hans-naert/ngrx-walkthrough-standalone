import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './State/books.actions';
import { Observable } from 'rxjs';
import { Book } from './Models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent, BookCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-walkthrough-standalone';

  book$:Observable<ReadonlyArray<Book>>=this.store.select('books');
  collection$:Observable<ReadonlyArray<String>>=this.store.select('collection');

  constructor(private store: Store<{books: ReadonlyArray<Book>, collection: ReadonlyArray<String>}>) {     
  }

  ngOnInit() {
    this.book$.subscribe(books => console.log(books));    
    this.collection$.subscribe(collection => console.log(collection));
    this.store.dispatch(BooksApiActions.retrievedBookList({ books: [{ id: '1', volumeInfo: { title: 'Book 1', authors: ['Piet', 'Luc'] } }, { id: '2', volumeInfo: { title: 'Book 2', authors:['Marc'] } }] }));
    this.store.dispatch(BooksActions.addBook({ bookId: '1' }));
  }

}
