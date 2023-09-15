import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './views/pages/book/book.component';
import { TopbarComponent } from './views/partial/layout/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BookService} from "./core/book/_services/book.service";
import { BookDetailComponent } from './views/pages/book-detail/book-detail.component';
import { BookCardComponent } from './views/partial/book-card/book-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TopbarComponent,
    BookDetailComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    RouterModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
