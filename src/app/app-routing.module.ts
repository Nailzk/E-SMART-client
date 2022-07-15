import { NgModule } from '@angular/core';

import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { AuthGuard, AuthorizedGuard } from 'guards';
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
        canActivate: [AuthGuard],
        loadChildren: () => import('account').then((m) => m.AccountModule),
      },
      {
        path: 'auth',
        canActivate: [AuthorizedGuard],
        loadChildren: () => import('auth').then((m) => m.AuthModule),
      },
      {
        path: 'products',
        loadChildren: () => import('products').then((m) => m.ProductsModule),
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'not-found',
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
