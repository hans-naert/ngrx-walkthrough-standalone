import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Book } from '../Models/book.model';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.scss'
})
export class BookCollectionComponent {

  @Input() books: ReadonlyArray<Book>=[];
  @Output() remove= new EventEmitter<string>();

}
