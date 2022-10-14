import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SearchBookComponent} from "./containers/search-book/search-book.component";
import {CreateBookComponent} from "./containers/create-book/create-book.component";
import {UpdateBookComponent} from "./containers/update-book/update-book.component";
import {HeaderBookComponent} from "./containers/header-book/header-book.component";

const routes: Routes = [
  {
    path: '',
    component: SearchBookComponent,
  },
  {
    path: 'create',
    component: CreateBookComponent,
  },
  {
    path: 'update',
    component: UpdateBookComponent,
  },
  {
    path: 'header',
    component: HeaderBookComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
