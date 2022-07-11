import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthRepository } from 'communication';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: RegisterFormComponent;

  public register(): void {
    this.registerForm.register();
  }
}
