import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoriesModule } from 'communication';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NotifierModule } from 'notifier';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgxTranslateModule } from 'translate';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    LayoutModule,
    RepositoriesModule.forRoot(),
    FormsModule,
    NzNotificationModule,
    NotifierModule,
    ReactiveFormsModule,
    NgxTranslateModule,
    BrowserAnimationsModule, // ! IMPORT AS LAST MODULE
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
