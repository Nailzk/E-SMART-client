import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          {
            path: 'settings',
            loadChildren: () =>
              import('./account-settings/account-settings.module').then((m) => m.AccountSettingsModule),
          },
          {
            path: 'orders',
            loadChildren: () => import('./account-orders/account-orders.module').then((m) => m.AccountOrdersModule),
          },
          {
            path: 'addresses',
            loadChildren: () =>
              import('./account-addresses/account-addresses.module').then((m) => m.AccountAddressesModule),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'settings',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AccountRouterModule {}
