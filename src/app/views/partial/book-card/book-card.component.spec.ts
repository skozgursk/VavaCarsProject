import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardComponent } from './book-card.component';
import {BookModel} from "../../../core/book/_models/book.model";

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCardComponent]
    });
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a harry potter', () => {
    component.bookItem = {
      "id": "25",
      "title": "Harry Potter",
      "author": "JK Rowling",
      "category": "Fiction",
      "coverImageUrl": "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
      "description": "This is the description for Harry Potter."
    } as BookModel;
    fixture.detectChanges();
    const hp = fixture.nativeElement.querySelector('h2');
    expect(hp.textContent).toBe('Harry Potter');
  });
});
