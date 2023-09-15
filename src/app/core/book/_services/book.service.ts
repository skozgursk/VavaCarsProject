import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BookModel, BookCardModel} from "../_models/book.model";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {PaginatedResponse} from "../../base/_models/paginatedResponse.model";

const API_URL = 'https://vavacarstestcaseozgur.azurewebsites.net';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  getBooksByCategory(page: number, limit: number, category: string): Observable<PaginatedResponse<BookCardModel>> {
    return this.http.get<HttpResponse<BookModel[]>>(`${API_URL}/books?_page=${page}&_limit=${limit}` + (category != '' ? `&category=${category}` : ''),
      {observe: 'response'}).pipe(map(response => {
        const totalCountHeader = response.headers.get('X-Total-Count');
        const list = (response.body as unknown as BookModel[]).map<BookCardModel>(({ description, ...rest}) => {
          return rest;
        });

        let data: PaginatedResponse<BookCardModel> = new PaginatedResponse<BookCardModel>(list, totalCountHeader ? parseInt(totalCountHeader, 10) : 0);
        return data;
    }))
  }

  //This is not ideal, actually what I want is backend returning the response of list but for now I ll use this
  getBooksCategoryFilters(): Observable<string[]> {
    return this.http.get<BookModel[]>(`${API_URL}/books`).pipe(map((response) => {
      return [...new Set(response.map(item => item.category))]
    }));
  }

  getBookById(id: string):Observable<BookModel> {
    return this.http.get<BookModel>(`${API_URL}/books/${id}`);
  }

}
