import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  imageUrl: any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    this.bookService.findById(id).pipe(take(1)).subscribe(res => {
        this.imageUrl=res?.content?.image;
    });
  }
  onShow(){
    console.log(this.imageUrl);
  }

}
