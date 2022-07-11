import { Component, ViewChild } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: LoginFormComponent;

  public login(): void {
    this.loginForm.login();
  }
}
