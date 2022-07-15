import { Component, Input } from '@angular/core';
import { ActionsEnum } from '@app/enum';
import { BasketService } from '@app/service';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FavoritesRepository, IBasketItem, IProduct } from 'communication';
import { NotifierService } from 'notifier';
import { User } from 'user';
import { BasketItemsRepository } from '../../../../../communication/src/lib/repositories/basket-items.repository';
import { IBaseItem } from '../../../../../communication/src/lib/interface/base-item';

@UntilDestroy()
@Component({
  selector: 'lib-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent {
  @Input() item: IProduct | undefined;

  public faHeart = faHeart;
  public faCart = faShoppingCart;

  public get isFavorite(): boolean {
    return this.item?.favorites?.length
      ? this.item?.favorites.some(({ userId }) => userId === this._user.id)
      : false;
  }

  public get isAddedToBasket(): boolean {
    return !this._user.isAuthorized
      ? (JSON.parse(localStorage.basket ?? 'null') || []).includes(this.item?.id)
      : this.item?.basketItems?.some(({ userId }) => userId === this._user.id);
  }

  constructor(
    private readonly _user: User,
    private readonly _notifier: NotifierService,
    private readonly _favoritesRepository: FavoritesRepository,
    private readonly _basketItemsRepository: BasketItemsRepository,
    private readonly _basketService: BasketService,
  ) {}

  public handleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    if (!this.item?.id) return;

    if (this.isFavorite) this._removeFavorite();
    else this._createFavorite();
  }

  public handleBasket(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    if (!this.item?.id) return;

    if (this.isAddedToBasket) this._removeFromBasket();
    else this._addToBasket();
  }

  private _addToBasket() {
    if (!this._user.isAuthorized) {
      const items = JSON.parse(localStorage.basket ?? 'null') || [];

      const basketItems = [...items, this.item?.id];
      localStorage.basket = JSON.stringify(basketItems);
      this._notifier.success('Product successfully added to basket.');
    } else {
      this._basketItemsRepository
        .createItem({ userId: this._user.id, productId: this.item?.id })
        .pipe(untilDestroyed(this))
        .subscribe(
          (res) => {
            this._notifier.success('Product successfully added to basket.');
            this.item?.basketItems?.push(res);
            this._basketService.triggerChanges({ ...res, action: ActionsEnum.ADD });
          },
          (err) => this._notifier.error(err),
        );
    }
  }

  private _removeFromBasket() {
    if (!this._user.isAuthorized) {
      const items = JSON.parse(localStorage.basket ?? 'null') || [];
      
      const basketItems = items.filter((val: number) => val !== this.item?.id);;
      localStorage.basket = JSON.stringify(basketItems);
      this._notifier.success('Product removed from your basket');
    } else {
      const basketItem = this.item?.basketItems?.find((val) => val.userId === this._user.id);

      if (basketItem) {
        this._basketItemsRepository
          .deleteItem(basketItem.id)
          .pipe(untilDestroyed(this))
          .subscribe(
            () => {
              this._notifier.success('Product removed from your basket');
              if (this.item)
                this.item.basketItems = this.item.basketItems?.filter(
                  (val) => val.userId !== this._user.id,
                );
              this._basketService.triggerChanges({ ...basketItem, action: ActionsEnum.REMOVE });
            },
            (err) => this._notifier.error(err),
          );
      }
    }
  }

  private _removeFavorite() {
    const favorite = this.item?.favorites?.find((val) => val.userId === this._user.id);

    if (favorite) {
      this._favoritesRepository
        .deleteItem(favorite.id)
        .pipe(untilDestroyed(this))
        .subscribe(
          () => {
            this._notifier.success('Product removed from your favorites');
            if (this.item)
              this.item.favorites = this.item.favorites?.filter(
                (val) => val.userId !== this._user.id,
              );
          },
          (err) => this._notifier.error(err),
        );
    }
  }

  private _createFavorite() {
    this._favoritesRepository
      .createItem({ userId: this._user.id, productId: this.item?.id })
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          this._notifier.success('Product added to your favorites');
          this.item?.favorites?.push(res);
        },
        (err) => this._notifier.error(err),
      );
  }
}
