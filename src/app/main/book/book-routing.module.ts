import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SearchBookComponent} from "./containers/search-book/search-book.component";
import {CreateBookComponent} from "./containers/create-book/create-book.component";
import {UpdateBookComponent} from "./containers/update-book/update-book.component";
import {HeaderBookComponent} from "./containers/header-book/header-book.component";
import {CreateCoverImageComponent} from "./containers/create-cover-image/create-cover-image.component";

// const allPages = [
//   {
//     path: 'create',
//     component: CreateBookComponent,
//   },
// ];
const routes: Routes = [
  // {
  //   path: '',
  //   component: HeaderBookComponent,
  //   children: allPages
  // },
  {
    path: '',
    component: SearchBookComponent,
  },
  {
    path: 'create',
    component: CreateBookComponent,
  },
  {
    path: 'update/:id',
    component: UpdateBookComponent,
  },
  {
    path: 'header',
    component: HeaderBookComponent,
  },
  {
    path: 'coverImage/create',
    component: CreateCoverImageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
