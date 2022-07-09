import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommentsCreateComponent } from './components/comments-create/comments-create.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsItemComponent } from './components/comments-item/comments-item.component';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentsCreateComponent,
    CommentsListComponent,
    CommentsItemComponent
  ],
  imports: [
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
