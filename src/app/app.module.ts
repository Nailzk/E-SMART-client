import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RepositoriesModule } from 'communication';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NotifierModule } from 'notifier';
import { NgxTranslateModule } from 'translate';
import { AppRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { StarRatingModule } from 'angular-star-rating';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserModule } from 'user';
import { NzIconsModule } from './icons.module';
import { NotFoundComponent } from './not-found/not-found.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRouterModule,
    LayoutModule,
    RepositoriesModule.forRoot(),
    StarRatingModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    NzNotificationModule,
    NgxTranslateModule,
    NotifierModule,
    NzButtonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UserModule,
    NzIconsModule,
    BrowserAnimationsModule, // ! IMPORT AS LAST MODULE
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
