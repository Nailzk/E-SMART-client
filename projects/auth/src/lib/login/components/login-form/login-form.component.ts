import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsComponent } from 'base-components';

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

  constructor(private readonly _fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected createForm(): FormGroup {
    return this._fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
