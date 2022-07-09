import { Component, OnInit } from '@angular/core';
import { FormsComponent } from 'base-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { IRegisterFormControl } from '../../../interface';

@Component({
  selector: 'lib-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent extends FormsComponent<any> implements OnInit {
  public formControls: IRegisterFormControl[] = [];

  constructor(private readonly _fb: FormBuilder, private readonly _authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formControls = this._authService.registerFormControls;
  }

  protected createForm(): FormGroup {
    return this._fb.group(
      {
        name: [null, [Validators.required]],
        surname: [null, [Validators.required]],
        phone: [null, [Validators.required]],
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
        birthDate: [null, [Validators.required]],
      },
      {
        updateOn: 'blur',
      },
    );
  }
}
