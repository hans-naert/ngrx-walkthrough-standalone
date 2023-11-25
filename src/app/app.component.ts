import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './State/books.actions';
import { Observable } from 'rxjs';
import { Book } from './Models/book.model';
import { selectBookCollection, selectBooks } from './State/books.selectors';
import { BooksService } from './Services/books.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent, BookCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-walkthrough-standalone';

  books$:Observable<ReadonlyArray<Book>>=this.store.select(selectBooks);
  collection$:Observable<ReadonlyArray<Book>>=this.store.select(selectBookCollection);

  constructor(private store: Store/*<{books: ReadonlyArray<Book>, collection: ReadonlyArray<string>}>*/, private booksService: BooksService) {     
    
  }

  ngOnInit() {
    this.books$.subscribe(books => console.log(books));    
    this.collection$.subscribe(collection => console.log(collection));
    //this.store.dispatch(BooksApiActions.retrievedBookList({ books: [{ id: '1', volumeInfo: { title: 'Book 1', authors: ['Piet', 'Luc'] } }, { id: '2', volumeInfo: { title: 'Book 2', authors:['Marc'] } }] }));
    //this.store.dispatch(BooksActions.addBook({ bookId: '1' }));
    this.booksService.getBooks().subscribe(books => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }

  add(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  remove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}
