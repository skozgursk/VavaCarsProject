export type BookCardModel = Omit<BookModel, 'description'>;

export class BookModel {
  id: string;
  title: string;
  author: string;
  category: string;
  coverImageUrl: string;
  description: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.author = '';
    this.category = '';
    this.description = '';
    this.coverImageUrl = '';
  }
}


