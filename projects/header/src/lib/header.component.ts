import { Component, OnInit } from '@angular/core';
import { faClose, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { ILang, NgxTranslateService } from 'translate';
import { HeaderService } from './header.service';
import { IHeaderMenu } from './interface';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public langList: ILang[] = [];
  public headerMenu: IHeaderMenu[] = [];

  public currentLang: string;
  public search = ''

  public faUser = faUser;
  public faSearch = faMagnifyingGlass;
  public faCart = faShoppingCart;
  public faClose = faClose;

  public searchActive = false;

  constructor(
    private readonly _translateService: NgxTranslateService,
    private readonly _headerService: HeaderService,
  ) {}

  ngOnInit(): void {
    this.langList = this._translateService.langList;
    this.currentLang = this._translateService.currentLanguage;
    this.headerMenu = this._headerService.menuList;

    this._subscribeOnLanguageChanges();
  }

  public handleSearch(): void {
    this.searchActive = !this.searchActive;
  }

  public handleLanguageChange(lang: ILang): void {
    this._translateService.changeLanguage(lang.code);
  }

  private _subscribeOnLanguageChanges() {
    this._translateService.onLanguageChanges().subscribe((val) => {
      this.currentLang = val.label;
    });
  }
}
