import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SearchBookComponent} from "./containers/search-book/search-book.component";
import {CreateBookComponent} from "./containers/create-book/create-book.component";

const routes: Routes = [
  {
    path: '',
    component: SearchBookComponent,
  },
  {
    path: 'create',
    component: CreateBookComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
