import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-create-book-author',
  templateUrl: './create-book-author.component.html',
  styleUrls: ['./create-book-author.component.scss']
})
export class CreateBookAuthorComponent implements OnInit {
  disableSave = false;
  imageUrlAvatar: any = '';
  imageUrlFrame: any = '';
  authorName = null;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onReturn(){
    this.router.navigate(['']).then();
  }
  onFileChangeAvatar(event: any) {
    console.log('event', event);
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrlAvatar = reader.result;
        console.log('file?.name', file?.name);
        console.log('reader.result', reader.result);
      };
    }
  }

  onFileChangeFrame(event: any) {
    console.log('event', event);
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrlFrame = reader.result;
        console.log('file?.name', file?.name);
        console.log('reader.result', reader.result);
      };
    }
  }
  onSave(){
    // this.dataCreate = {
    //   name: this.booKName,
    //   price: this.booKPrice,
    //   description: this.bookDescription,
    //   image: this.imageUrl,
    //   category: 1,
    // };
    // this.bookService.createBook(this.dataCreate).pipe(take(1)).subscribe(res => {
    //   if(res?.success === true) this.disableSave = true;
    // });
  }

}
