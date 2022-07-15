import { Component, Injector, OnInit } from '@angular/core';
import { ItemsComponent } from 'base-components';
import { CommentsRepository, IComment } from 'communication';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommentsService } from '../../comments.service';
import { ThisReceiver } from '@angular/compiler';

@UntilDestroy()
@Component({
  selector: 'lib-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent extends ItemsComponent<IComment> implements OnInit {
  constructor(
    protected _repository: CommentsRepository,
    protected _injector: Injector,
    private readonly _commentsService: CommentsService,
  ) {
    super();
    this.autoLoadConfig = { ...this.autoLoadConfig, onInit: false };
  }

  ngOnInit(): void {
    super.ngOnInit();
    this._subscribeOnRouteParams();
    this._subscribeOnCommentCreate();
  }

  protected loadData(productId?: string): void {
    super.loadData({ s: JSON.stringify({ productId }), sort: 'createdAt,DESC' });
  }

  private _subscribeOnRouteParams() {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      if (params?.id) this.loadData(params?.id);
    });
  }

  private _subscribeOnCommentCreate() {
    this._commentsService.commentChanges
      .pipe(untilDestroyed(this))
      .subscribe((comment: IComment) => {
        this.builder.replaceItems([comment, ...this.items]);
      });
  }
}
