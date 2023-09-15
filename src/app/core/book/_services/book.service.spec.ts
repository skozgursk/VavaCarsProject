import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BookModel} from "../_models/book.model";

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [BookService], // Provide the BookService
    });
    service = TestBed.inject(BookService); // Use TestBed to get the service instance
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create an service', () => {
    expect(service).toBeTruthy();
  });

  it('get data', () => {

    const testData = {
      "id": "25",
      "title": "Harry Potter",
      "author": "JK Rowling",
      "category": "Fiction",
      "coverImageUrl": "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
      "description": "This is the description for Harry Potter."
    } as BookModel;
    service.getBookById("25").subscribe((data) =>  {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3000/books/25');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(testData);

    // Verify that there are no pending requests
    httpMock.verify();
  });
});
