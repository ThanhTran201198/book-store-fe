import {NgModule} from "@angular/core";
import {BookRoutingModule} from "./book-routing.module";
import {SearchBookComponent} from './containers/search-book/search-book.component';
import {CommonModule} from "@angular/common";
import {CreateBookComponent} from './containers/create-book/create-book.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateBookComponent} from './containers/update-book/update-book.component';
import {HeaderBookComponent} from './containers/header-book/header-book.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {CreateCoverImageComponent} from './containers/create-cover-image/create-cover-image.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {CreateBookAuthorComponent} from './containers/create-book-author/create-book-author.component';
import {CreateFrameComponent} from './containers/create-frame/create-frame.component';
import {ModalSearchFrameComponent} from './containers/modal-search-frame/modal-search-frame.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";


@NgModule({
  declarations: [
    SearchBookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    HeaderBookComponent,
    CreateCoverImageComponent,
    CreateBookAuthorComponent,
    CreateFrameComponent,
    ModalSearchFrameComponent,
  ],
    imports: [
        BookRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzIconModule,
        NzSelectModule,
        NzModalModule,
        NzDatePickerModule,
    ],
})
export class BookModule {}
