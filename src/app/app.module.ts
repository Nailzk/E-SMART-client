import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoriesModule } from 'communication';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgxTranslateModule } from 'translate';
import { NotifierModule } from 'notifier';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRouterModule,
    LayoutModule,
    RepositoriesModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    NzNotificationModule,
    NgxTranslateModule,
    NotifierModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule, // ! IMPORT AS LAST MODULE
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
