import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs/operators";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  dataCreate: any = {};
  booKName = '';
  booKPrice = 0;
  bookDescription= '';
  bookImage: any;
  resultsSave: any;
  disableSave = false;
  constructor(
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onReturn(){
    this.router.navigate(['']).then();
  }

  onSave(){
    this.dataCreate = {
      name: this.booKName,
      price: this.booKPrice,
      description: this.bookDescription,
    };
    this.bookService.createBook(this.dataCreate).pipe(take(1)).subscribe(res => {
      if(res?.success === true) this.disableSave = true;
    });
  }
  onShow(){
    console.log(this.bookImage);
  }
}
