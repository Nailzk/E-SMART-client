import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpRepository, IBaseItem, IPaginationResponse } from 'communication';
import { finalize } from 'rxjs';
import { LoadingComponent } from './loading.component';

@UntilDestroy()
@Component({ template: '' })
export class ItemComponent<T extends IBaseItem> extends LoadingComponent<T> implements OnInit {
  constructor(
    @Inject(HttpRepository) protected _repository?: HttpRepository<T>,
    @Optional() @Inject(Injector) protected _injector?: Injector,
  ) {
    super(_injector);
  }

  public get loading(): boolean {
    return this.isLoading;
  }

  ngOnInit() {
    super.ngOnInit();

    if (!this.autoLoadConfig) return;

    if (this.autoLoadConfig.onInit) this.loadData();
  }

  protected loadData(query?: any) {
    const loading = this.showLoading();

    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      const id = params?.id;

      if (id) {
        this._repository
          ?.getItems({ ...query, s: JSON.stringify({ id }) })
          .pipe(
            untilDestroyed(this),
            finalize(() => loading()),
          )
          .subscribe(
            (res: IPaginationResponse<T>) => this.handleItem(res),
            (err) => this.showError(err),
          );
      }
    });
  }

  protected handleItem(res: IPaginationResponse<T>): void {
    const data = res.data ?? [];

    if (data?.length) {
      this.builder.replaceItem(data[0]);
    }
  }

  protected loadMore(): void {
    this.skip += this.defaultLimit;
    this.loadData();
  }

  protected refresh(): void {
    this.skip = 0;
    this.loadData();
  }

  protected loadOnParamsChanges(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      this.loadData(params);
    });
  }

  protected loadOnQueryParamsChanges(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      this.loadData(params);
    });
  }
}
