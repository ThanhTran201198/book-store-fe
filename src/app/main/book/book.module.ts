import {NgModule} from "@angular/core";
import {BookRoutingModule} from "./book-routing.module";
import { SearchBookComponent } from './containers/search-book/search-book.component';
import {CommonModule} from "@angular/common";
import { CreateBookComponent } from './containers/create-book/create-book.component';

@NgModule({
  declarations: [
    SearchBookComponent,
    CreateBookComponent,
  ],
  imports: [
    BookRoutingModule,
    CommonModule,
  ],
})
export class BookModule {}
