import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookDetailComponent} from "./views/pages/book-detail/book-detail.component";
import {BookComponent} from "./views/pages/book/book.component";

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'books', component: BookComponent },
  { path: 'books/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
