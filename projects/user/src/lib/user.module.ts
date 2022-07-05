import { APP_INITIALIZER, NgModule } from '@angular/core';
import { User } from './user';

@NgModule({
  providers: [
    User,
    {
      provide: APP_INITIALIZER,
      deps: [User],
      multi: true,
      useFactory: (usersService: User) => () => {
        return usersService.loadUser();
      },
    },
  ],
})
export class UserModule {}
