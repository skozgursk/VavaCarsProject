import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BookDetailComponent } from './book-detail.component';
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

const mockActivatedRoute = {
  paramMap: of({
    get: (param: string) => '123', // Replace '123' with the desired parameter value
  }),
};

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BookDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        // Other providers if needed
      ],
    });
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
