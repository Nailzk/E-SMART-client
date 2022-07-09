import { NgModule } from '@angular/core';

import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const modules: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('homepage').then((m) => m.HomepageModule),
      },
      {
        path: 'account',
        loadChildren: () => import('account').then((m) => m.AccountModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('auth').then((m) => m.AuthModule),
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'not-found',
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
