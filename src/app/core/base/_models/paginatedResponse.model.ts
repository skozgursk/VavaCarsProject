export class PaginatedResponse <T> {
  totalItemsCount: number;
  items: T[]

  constructor(items: T[], count: number) {
    this.items = items;
    this.totalItemsCount = count;
  }
}
