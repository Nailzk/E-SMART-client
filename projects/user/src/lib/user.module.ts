import { APP_INITIALIZER, NgModule } from '@angular/core';
import { User } from './user.service';

@NgModule({
  providers: [
    User,
    {
      provide: APP_INITIALIZER,
      useClass: User,
      useFactory: (user: User) => () => {
        return user;
      },
    },
  ],
})
export class UserModule {}
