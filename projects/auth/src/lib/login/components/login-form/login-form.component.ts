import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsComponent } from 'base-components';
import { AuthRepository } from 'communication';
import { User } from 'user';

@Component({
  selector: 'lib-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent extends FormsComponent<any> implements OnInit {
  protected errorMessages: any = {
    login: {
      required: 'required',
    },
    password: {
      required: 'required',
    },
  };

  constructor(
    protected _repository: AuthRepository,
    protected _injector: Injector,
    private readonly _fb: FormBuilder,
    private readonly _user: User,
  ) {
    super();

    this.autoLoadConfig = { ...this.autoLoadConfig, onInit: false };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public login(): void {
    if (this.form.invalid) return;

    const loginDto = this.formValues;

    this._repository.login(loginDto).subscribe(
      (res) => {
        this._user.loadUser().subscribe();
        this.showSuccess('Success');
        this.router.navigateByUrl('/home')
      },
      (err) => this.showError(err),
    );
  }

  protected createForm(): FormGroup {
    return this._fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
