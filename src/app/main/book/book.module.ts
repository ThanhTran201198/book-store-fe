import {NgModule} from "@angular/core";
import {BookRoutingModule} from "./book-routing.module";
import { SearchBookComponent } from './containers/search-book/search-book.component';
import {CommonModule} from "@angular/common";
import { CreateBookComponent } from './containers/create-book/create-book.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SearchBookComponent,
    CreateBookComponent,
  ],
    imports: [
        BookRoutingModule,
        CommonModule,
        FormsModule,
    ],
})
export class BookModule {}
