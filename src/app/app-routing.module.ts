import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {NgModule} from '@angular/core';
import {BookReadComponent} from './book-read/book-read.component';
import {BookUnreadComponent} from './book-unread/book-unread.component';
import {BookCreateComponent} from './book-create/book-create.component';

const routes: Routes = [{
  path: 'book',
  component: BookComponent
},  {
  path: 'book-read',
  component: BookReadComponent
},  {
  path: 'book-unread',
  component: BookUnreadComponent
}, {
  path: 'book-create',
  component: BookCreateComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
