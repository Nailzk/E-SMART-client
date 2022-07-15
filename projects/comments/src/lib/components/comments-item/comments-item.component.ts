import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '@app/service';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { IComment, IUser, UsersRepository } from 'communication';
import { User } from 'user';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NotifierService } from 'notifier';

@UntilDestroy()
@Component({
  selector: 'lib-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.scss'],
})
export class CommentsItemComponent implements OnInit {
  @Input() set item(val: IComment | undefined) {
    if (val) {
      this._item = val;
      this._initUser(val.userId);
    }
  }

  get item(): IComment {
    return this._item;
  }

  public userId: number;
  public idToPreview: string;
  public avatarUrl: string;
  public user: IUser;

  public isVisible = false;

  public faEllipsis = faEllipsisVertical;

  public get fullName(): string {
    return `${this.user?.name || '--'} ${this.user?.surname || '--'}`;
  }

  private _item: IComment;

  constructor(
    private readonly _imageService: ImageService,
    private readonly _user: User,
    private readonly _usersRepository: UsersRepository,
    private readonly _notifier: NotifierService,
  ) {}

  ngOnInit(): void {
    this.userId = this._user.id;
  }

  public generatePhotoUrl(id: string): string {
    return this._imageService.generatePhotoUrlById(id);
  }

  public handleCloseModal(): void {
    this.isVisible = false;
  }

  public handleImageClick(id: string): void {
    this.idToPreview = id;
    this.isVisible = true;
  }

  private _initUser(userId: number) {
    this._usersRepository
      .getItemById(userId)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          this.user = res;
          this.avatarUrl = this._imageService.generateUserPhotoUrl(res.photoId);
        },
        (err) => this._notifier.error(err),
      );
  }
}
