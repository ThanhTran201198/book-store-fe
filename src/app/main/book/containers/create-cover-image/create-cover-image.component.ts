import { Component, OnInit } from '@angular/core';
import {take} from "rxjs/operators";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-create-cover-image',
  templateUrl: './create-cover-image.component.html',
  styleUrls: ['./create-cover-image.component.scss']
})
export class CreateCoverImageComponent implements OnInit {
  imageUrl: any = '';
  dataCreate: any = {};
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
  }

  onSave(){
    this.dataCreate = {
      image: this.imageUrl,
    };
    this.bookService.createCoverImage(this.dataCreate).pipe(take(1)).subscribe(res => {
      // if(res?.success === true) this.disableSave = true;
    });
  }

  onFileChange(event: any) {
    console.log('event', event);
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        console.log('file?.name', file?.name);
        console.log('reader.result', reader.result);
        // this.formUser.get('avatar').setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: reader.result.split(',')[1]
        // })
      };
    }
  }

}
