import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NzLayoutComponent} from "ng-zorro-antd/layout";
import {NzDemoLayoutCustomTriggerComponent} from "./layout/layout.component";

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./main/book/book.module').then( m=>m.BookModule)
  // },
  {
    path: '',
    component: NzDemoLayoutCustomTriggerComponent,
    canActivate: [],
    children: [
      {
        path: '',
        canActivate: [],
        loadChildren: () => import('./main/book/book.module').then( m=>m.BookModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./main/auth/auth.module').then( m=>m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
