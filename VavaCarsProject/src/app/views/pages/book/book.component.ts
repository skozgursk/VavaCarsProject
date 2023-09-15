import { Component } from '@angular/core';
import {BookService} from "../../../core/book/_services/book.service";
import {BookCardModel, BookModel} from "../../../core/book/_models/book.model";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [NgbPaginationModule]
})
export class BookComponent {

  protected items: BookCardModel[] = [];
  protected page = 1;
  protected pageSize = 9;
  protected totalItems = 0;
  protected categoryFilter = '';
  protected categoryFilterList: string[] | undefined;

  protected BookModel = BookModel;

  constructor(
    private bookService: BookService
  ) {

  }

  ngOnInit() {
    this.getFilters();
    this.getData();
  }

  getFilters(): void {
    this.bookService.getBooksCategoryFilters().subscribe(res => {
      this.categoryFilterList = res;
    });
  }
  getData(): void {
    this.bookService.getBooksByCategory(this.page, this.pageSize, this.categoryFilter).subscribe(res => {
      this.totalItems = res.totalItemsCount;
      this.items = res.items;
    });
  }

  onFilterSelect(filter: string): void {
    this.categoryFilter = filter;
    this.getData();
  }

  onPageChange(): void {
    this.getData();
  }
}
