import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BookService} from "../../../core/book/_services/book.service";
import {BookModel} from "../../../core/book/_models/book.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  protected data: BookModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.getData(id);
    });
  }

  getData(id: string | null): void {
    this.bookService.getBookById(id!).subscribe((item) => {
      this.data = item;
    });
  }

}
