import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

@NgModule({
  declarations: [ImagePreviewComponent],
  imports: [CommonModule, NzModalModule],
  exports: [ImagePreviewComponent],
})
export class ModalModule {}
