import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbModule],
      declarations: [BookComponent]
    });
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
