import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

registerLocaleData(en);

const modules: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../projects/homepage').then((m) => m.HomepageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(modules, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRouterModule {}
