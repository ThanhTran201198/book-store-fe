import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {take} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  dataSearch: any = {};
  listBook: any[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.dataSearch = {
      query: null,
      pageSize: 10,
      pageNumber: 0,
    };
    this.bookService.getLishBook(this.dataSearch).pipe(take(1)).subscribe(res => {
      this.listBook = res?.page?.content;
    });
  }

  onCreate() {
    this.router.navigate(['create']).then();
  }
  onDelete(bookId? : any){
    this.bookService.deleteBook(bookId).pipe(take(1)).subscribe(res => {
      if(res?.success){
        this.onSearch();
      }
    });
  }


}
