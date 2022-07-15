import { Component, OnInit } from '@angular/core';
import {
  faClose,
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ILang, NgxTranslateService } from 'translate';
import { User } from 'user';
import { HeaderService } from './header.service';
import { IHeaderMenu } from './interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BasketItemsRepository, IProduct, ProductsRepository } from 'communication';
import { BasketService, ImageService } from '@app/service';
import { NotifierService } from 'notifier';

@UntilDestroy()
@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public langList: ILang[] = [];
  public headerMenu: IHeaderMenu[] = [];
  public products: IProduct[] = [];

  public currentLang: string;
  public search = '';

  public faUser = faUser;
  public faSearch = faMagnifyingGlass;
  public faCart = faShoppingCart;
  public faClose = faClose;

  public searchActive = false;
  public isAuthorized = false;

  public get total(): number {
    return this.products.reduce((acc, val) => (acc += val.price), 0) ?? 0;
  }

  constructor(
    private readonly _translateService: NgxTranslateService,
    private readonly _headerService: HeaderService,
    private readonly _user: User,
    private readonly _basketItemsRepository: BasketItemsRepository,
    private readonly _basketService: BasketService,
    private readonly _notifier: NotifierService,
    private readonly _productsRepository: ProductsRepository,
    private readonly _imageService: ImageService,
  ) {}

  ngOnInit(): void {
    this.langList = this._translateService.langList;
    this.currentLang = this._translateService.currentLanguage;
    this.headerMenu = this._headerService.menuList;
    this.isAuthorized = this._user.isAuthorized;

    this._subscribeOnLanguageChanges();
    this._subscribeOnUserChanges();
    this._initBasketProducts();
  }

  public handleSearch(): void {
    this.searchActive = !this.searchActive;
  }

  public generatePhotoUrl(id: string): string {
    return this._imageService.generatePhotoUrlById(id);
  }

  public handleLanguageChange(lang: ILang): void {
    this._translateService.changeLanguage(lang.code);
  }

  private _subscribeOnLanguageChanges() {
    this._translateService
      .onLanguageChanges()
      .pipe(untilDestroyed(this))
      .subscribe((val) => {
        this.currentLang = val.label;
      });
  }

  private _subscribeOnUserChanges() {
    this._user.onUserChanges.pipe(untilDestroyed(this)).subscribe((user) => {
      this.isAuthorized = !!user;
    });
  }

  private _initBasketProducts() {
    if (this._user.isAuthorized) {
      this._basketItemsRepository
        .getItems({ s: JSON.stringify({ userId: this._user.id }) })
        .pipe(untilDestroyed(this))
        .subscribe(
          (res) => {
            this.products = res.data?.map((val) => val?.product as IProduct);
          },
          (err) => this._notifier.error(err),
        );
    } else {
      const ids = JSON.parse(localStorage.basket ?? 'null') || [];

      if (ids?.length)
        this._productsRepository
          .getItemsByField(ids)
          .pipe(untilDestroyed(this))
          .subscribe(
            (res) => {
              this.products = res.data;
            },
            (err) => this._notifier.error(err),
          );
    }
  }
}
