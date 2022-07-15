import { Component, OnInit, Injector } from '@angular/core';
import { ImageService } from '@app/service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ItemComponent } from 'base-components';
import { FavoritesRepository, IProduct, ProductsRepository } from 'communication';
import { User } from 'user';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'lib-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends ItemComponent<IProduct> implements OnInit {
  public faHeart = faHeart;

  public get isFavorite(): boolean {
    return this.item?.favorites?.length
      ? this.item?.favorites.some(({ userId }) => userId === this._user.id)
      : false;
  }

  constructor(
    protected _repository: ProductsRepository,
    protected _injector: Injector,
    private readonly _imageService: ImageService,
    private readonly _favoritesRepository: FavoritesRepository,
    private readonly _user: User,
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public generatePhotoUrl(id?: string) {
    return id ? this._imageService.generatePhotoUrlById(id) : '';
  }

  public handleFavorite(): void {
    if (this.isFavorite) this._removeFavorite();
    else this._createFavorite();
  }

  protected loadData(params?: any): void {
    super.loadData({ ...params, join: ['brand', 'favorites'] });
  }

  private _removeFavorite() {
    const favorite = this.item.favorites?.find((val) => val.userId === this._user.id);

    if (favorite) {
      this._favoritesRepository
        .deleteItem(favorite.id)
        .pipe(untilDestroyed(this))
        .subscribe(
          () => {
            this.showSuccess('Product removed from your favorites');
            this.item.favorites = this.item.favorites?.filter((val) => val.userId !== this._user.id);
          },
          (err) => this.showError(err),
        );
    }
  }

  private _createFavorite() {
    this._favoritesRepository
      .createItem({ userId: this._user.id, productId: this.item?.id })
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          this.showSuccess('Product added to your favorites');
          this.item.favorites?.push(res);
        },
        (err) => this.showError(err),
      );
  }
}
