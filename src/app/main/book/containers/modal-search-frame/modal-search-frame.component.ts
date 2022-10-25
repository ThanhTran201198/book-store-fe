import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs/operators";
import {BookService} from "../../service/book.service";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-modal-search-frame',
  templateUrl: './modal-search-frame.component.html',
  styleUrls: ['./modal-search-frame.component.scss']
})
export class ModalSearchFrameComponent implements OnInit {
  dataSearch: any = {};
  listFrame: any[] = [];
  constructor(
    private router: Router,
    private bookService: BookService,
    private modal: NzModalRef,
  ) { }

  ngOnInit(): void {
    this.onSearch();
  }
  onReturn(){
    this.router.navigate(['']).then();
  }
  onSearch() {
    this.dataSearch = {
      query: null,
      pageSize: 10,
      pageNumber: 0,
    };
    this.bookService.getListFrame(this.dataSearch).pipe(take(1)).subscribe(res => {
      this.listFrame = res?.page?.content;
    });
  }

  onSelect(item?: any){
    this.modal.destroy(item);
    // return item;
  }

}
