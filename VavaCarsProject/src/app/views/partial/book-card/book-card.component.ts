import { Component, Input } from '@angular/core';
import {BookCardModel, BookModel} from "../../../core/book/_models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() bookItem: BookModel | BookCardModel | undefined;
  @Input() isDetailCard = false;
}
