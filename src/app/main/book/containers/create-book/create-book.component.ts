import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs/operators";
import {BookService} from "../../service/book.service";
import {FormBuilder,FormGroup} from "@angular/forms";
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  dataCreate: any = {};
  dataGetCat: any = {};
  booKName = null;
  booKPrice = null;
  bookDescription= '';
  bookImage: any;
  resultsSave: any;
  disableSave = false;
  imageUrl: any = '';
  selectedValue=null;
  selectedBookCategory = null;
  selectedBookStatus = null;
  bookCategory: any[] = [];
  bookStatus: any[] = [];

  optionList = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  constructor(
    private bookService: BookService,
    private router: Router,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.dataGetCat = {
      bookCategory: true,
      bookStatus: true,
    };
    this.bookService.getCat(this.dataGetCat).pipe(take(1)).subscribe(res => {
      if(res?.success === true){
        this.bookStatus = res?.content?.bookStatus;
        this.bookCategory = res?.content?.bookCategory;
      }
    });
  }

  onReturn(){
    this.router.navigate(['']).then();
  }

  onSave(){
    this.dataCreate = {
      name: this.booKName,
      price: this.booKPrice,
      description: this.bookDescription,
      image: this.imageUrl,
      category: 1,
    };
    this.bookService.createBook(this.dataCreate).pipe(take(1)).subscribe(res => {
      if(res?.success === true) this.disableSave = true;
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

  onShow(){
    console.log(this.selectedBookStatus);
  }
}
