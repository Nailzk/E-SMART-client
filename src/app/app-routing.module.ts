import { NgModule } from '@angular/core';

import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


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
