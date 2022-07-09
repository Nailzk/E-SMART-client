import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: '**',
        redirectTo: '/not-found',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRouterModule {}
