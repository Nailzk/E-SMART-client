import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ILang } from './interface';

@Injectable({ providedIn: 'root' })
export class NgxTranslateService {
  private _languageChanges$ = new Subject<ILang>();

  public langList: ILang[] = [
    { code: 'en', label: 'English' },
    { code: 'ua', label: 'Ukrainian' },
  ];

  public currentLanguage: string = this.langList[0].label;

  constructor(private readonly _translateService: TranslateService) {}

  public changeLanguage(code: string): void {
    const lang = this.langList.find((val) => val.code === code);

    if (lang) {
      this._translateService.use(code);
      this.currentLanguage = lang.label;
      this._languageChanges$.next(lang);
    }
  }

  public onLanguageChanges(): Subject<ILang> {
    return this._languageChanges$;
  }
}
