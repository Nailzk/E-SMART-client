import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MODAL_MASK } from '@app/constant';

@Component({
  selector: 'lib-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {
  @Input() isVisible: boolean | undefined;
  @Input() photoUrl: string | undefined;
  
  @Output() afterClose = new EventEmitter<void>();

  public modalMask = MODAL_MASK;

  public handleClose(): void {
    this.isVisible = false;
    this.afterClose.emit();
  }
}
