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

@UntilDestroy()
@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public langList: ILang[] = [];
  public headerMenu: IHeaderMenu[] = [];

  public currentLang: string;
  public search = '';

  public faUser = faUser;
  public faSearch = faMagnifyingGlass;
  public faCart = faShoppingCart;
  public faClose = faClose;

  public searchActive = false;
  public isAuthorized = false;

  constructor(
    private readonly _translateService: NgxTranslateService,
    private readonly _headerService: HeaderService,
    private readonly _user: User,
  ) {}

  ngOnInit(): void {
    this.langList = this._translateService.langList;
    this.currentLang = this._translateService.currentLanguage;
    this.headerMenu = this._headerService.menuList;
    this.isAuthorized = this._user.isAuthorized;

    this._subscribeOnLanguageChanges();
    this._subscribeOnUserChanges();
  }

  public handleSearch(): void {
    this.searchActive = !this.searchActive;
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
      this.isAuthorized = !!user
    });
  }
}
