import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { TimeagoModule } from 'ngx-timeago';
import { CommentsCreateComponent } from './components/comments-create/comments-create.component';
import { CommentsItemComponent } from './components/comments-item/comments-item.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { StarRatingModule } from 'angular-star-rating';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    CommentsCreateComponent,
    CommentsListComponent,
    CommentsItemComponent
  ],
  imports: [
    CommonModule,
    NzAvatarModule,
    TimeagoModule,
    NzCommentModule,
    FontAwesomeModule,
    ModalModule,
    StarRatingModule,
    NzUploadModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
  exports: [
    CommentsCreateComponent,
    CommentsListComponent,
    CommentsItemComponent
  ]
})
export class CommentsModule { }
