import {NgModule} from "@angular/core";
import {BookRoutingModule} from "./book-routing.module";
import { SearchBookComponent } from './containers/search-book/search-book.component';
import {CommonModule} from "@angular/common";
import { CreateBookComponent } from './containers/create-book/create-book.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateBookComponent } from './containers/update-book/update-book.component';
import { HeaderBookComponent } from './containers/header-book/header-book.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import { CreateCoverImageComponent } from './containers/create-cover-image/create-cover-image.component';
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  declarations: [
    SearchBookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    HeaderBookComponent,
    CreateCoverImageComponent,
  ],
    imports: [
        BookRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzIconModule,
        NzSelectModule,
    ],
})
export class BookModule {}
