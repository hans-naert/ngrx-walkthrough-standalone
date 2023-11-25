import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.scss'
})
export class BookCollectionComponent {

  @Input() book_ids: ReadonlyArray<string>=[];
  @Output() remove= new EventEmitter<string>();

}
