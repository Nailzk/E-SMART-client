import { Component, OnInit } from '@angular/core';
import { ILang, NgxTranslateService } from 'translate';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langList: ILang[] = [];
  currentLang: string;

  constructor(private readonly _translateService: NgxTranslateService) {}

  ngOnInit(): void {
    this.langList = this._translateService.langList;
    this.currentLang = this._translateService.currentLanguage;

    this._subscribeOnLanguageChanges()
  }

  public handleLanguageChange(lang: ILang): void {
    this._translateService.changeLanguage(lang.code);
  }

  private _subscribeOnLanguageChanges() {
    this._translateService.onLanguageChanges().subscribe((val) => {
      this.currentLang = val.label;
    })
  }

}
