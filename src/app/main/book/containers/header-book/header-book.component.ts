import { Component, OnInit } from '@angular/core';
import {take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-header-book',
  templateUrl: './header-book.component.html',
  styleUrls: ['./header-book.component.scss']
})
export class HeaderBookComponent implements OnInit {
  imageUrl: any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    this.bookService.searchOneCoverImage().pipe(take(1)).subscribe(res => {
      this.imageUrl=res?.content?.image;
    });
  }

}
