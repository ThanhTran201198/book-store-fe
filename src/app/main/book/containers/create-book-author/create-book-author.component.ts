import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalSearchFrameComponent} from "../modal-search-frame/modal-search-frame.component";
import {BookService} from "../../service/book.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-create-book-author',
  templateUrl: './create-book-author.component.html',
  styleUrls: ['./create-book-author.component.scss']
})
export class CreateBookAuthorComponent implements OnInit {
  disableSave = false;
  imageUrlAvatar: any = 'https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg';
  imageUrlFrame: any = '';
  authorName = null;
  item: any;
  dataCreate: any ={};
  birthDay = null;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  constructor(
    private router: Router,
    private modal: NzModalService,
    private bookService: BookService,
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
    this.dataCreate = {
      name: this.authorName,
      avatar: this.imageUrlAvatar,
      frame: this.item?.keyNumber,
      birthDay: this.birthDay,
    };
    this.bookService.createAuthor(this.dataCreate).pipe(take(1)).subscribe(res => {
      if(res?.success === true) this.disableSave = true;
    });
  }
  onSelectFrame(){
    const dialog =this.modal.create({
        nzContent: ModalSearchFrameComponent,
        nzTitle: 'Chọn Khung Viền',
        // nzWrapClassName: 'width-vw-90',
        nzStyle: {width: '1200px'},
    });
    dialog.afterClose.subscribe(value => {
      this.item = value;
      this.imageUrlFrame= value?.frame;
      console.log(this.item);
    });
  }
  onShow(){
    console.log(this.birthDay);
  }
}
