import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '@app/service';
import { faCamera, faClose } from '@fortawesome/free-solid-svg-icons';
import { RatingChangeEvent } from 'angular-star-rating';
import { FormsComponent } from 'base-components';
import { CommentsRepository, IComment } from 'communication';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { User } from 'user';
import { MAX_COMMENT_LENGTH } from '../../constant';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommentsService } from '../../comments.service';

@UntilDestroy()
@Component({
  selector: 'lib-comments-create',
  templateUrl: './comments-create.component.html',
  styleUrls: ['./comments-create.component.scss'],
})
export class CommentsCreateComponent extends FormsComponent<IComment> implements OnInit {
  @Input() productId: number | undefined;

  public fileList: NzUploadFile[] = [];
  public fileIds: string[] = [];

  public faCamera = faCamera;
  public faClose = faClose;

  public rating = 0;
  public maxLength = MAX_COMMENT_LENGTH;

  public errorMessages: any = {
    body: {
      maxlength: 'Comment length can`t be higher then 555 characters',
    },
  };

  constructor(
    protected _repository: CommentsRepository,
    protected _injector: Injector,
    private readonly _fb: FormBuilder,
    private readonly _imageService: ImageService,
    private readonly _user: User,
    private readonly _commentsService: CommentsService,
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public createComment(): void {
    if (this.form.invalid || !this.productId) return;

    const body = this.formValues.body ?? '';

    this._repository
      .createItem({
        userId: this._user.id,
        photoIds: this.fileIds,
        productId: this.productId,
        rating: this.rating,
        body,
      })
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          this.showSuccess('Comment successfully added!');
          this._commentsService.triggerChanges(res);
          this.form.patchValue({ body: '' });
          this.fileIds = [];
          this.rating = 0;
        },
        (err) => this.showError(err),
      );
  }

  public generatePhotoUrl(id: string): string {
    return this._imageService.generatePhotoUrlById(id);
  }

  public handleChange(changes: NzUploadChangeParam): void {
    const res = changes.file.response;

    if (res?.id) this.fileIds.push(res?.id);
  }

  public handleRateChange(event: RatingChangeEvent): void {
    this.rating = event.rating;
  }

  public removeImage(id: string): void {
    this.fileIds = this.fileIds.filter((val) => val !== id);
  }

  protected createForm(): FormGroup {
    return this._fb.group({
      body: [null, [Validators.maxLength(MAX_COMMENT_LENGTH)]],
    });
  }
}
