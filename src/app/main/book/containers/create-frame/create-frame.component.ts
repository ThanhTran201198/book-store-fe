import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-create-frame',
  templateUrl: './create-frame.component.html',
  styleUrls: ['./create-frame.component.scss']
})
export class CreateFrameComponent implements OnInit {
  disableSave = false;
  imageUrlFrame: any = '';
  frameName = '';
  dataCreate: any = {};
  constructor(
    private router: Router,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
  }

  onReturn(){
    this.router.navigate(['']).then();
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
    this.dataCreate = {
      name: this.frameName,
      frame: this.imageUrlFrame,
    };
    this.bookService.createFrame(this.dataCreate).pipe(take(1)).subscribe(res => {
      if(res?.success === true) this.disableSave = true;
    });
  }
}
