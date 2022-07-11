import { APP_INITIALIZER, NgModule } from '@angular/core';
import { User } from './user';

@NgModule({
  providers: [
    User,
    {
      provide: APP_INITIALIZER,
      useClass: User,
      multi: true,
      deps: [User],
      useFactory: (service: User) => () => {return service.loadUser()}
    },
  ],
})
export class UserModule {}
