import { Component, Injector, OnInit } from '@angular/core';
import { FormsComponent } from 'base-components';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { IRegisterFormControl } from '../../../interface';
import { AuthRepository, UsersRepository } from 'communication';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, mergeMap, Observable, of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'lib-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent extends FormsComponent<any> implements OnInit {
  public formControls: IRegisterFormControl[] = [];

  public errorMessages: any = {
    login: {
      required: 'Login is required',
      minlength: 'Login can`nt be shorter then 7 characters',
      isExist: 'This login already registered',
    },
    email: {
      required: 'Email is required',
      email: 'Wrong Email format',
      isExist: 'Email already registered',
    },
    phoneNumber: {
      required: 'Phone Number is required',
      pattern: 'Wrong phone number format',
      isExist: 'Phone number already registered',
    },
    password: {
      required: 'Password is required',
      minlength: 'Password minlength is 8 characters',
    },
    birthDate: {
      required: 'Birth Date is required',
    },
    name: {
      required: 'Name is required',
    },
    surname: {
      required: 'Surname is required',
    },
  };

  constructor(
    protected _repository: AuthRepository,
    protected _injector: Injector,
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _usersRepository: UsersRepository,
  ) {
    super();
    this.autoLoadConfig = { ...this.autoLoadConfig, onInit: false };
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formControls = this._authService.registerFormControls;
  }

  public register(): void {
    this.validateForm();

    if (this.form.invalid) return;

    const registerDto = this.formValues;

    this._repository
      .register(registerDto)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/auth/login');
        },
        (err) => this.showError(err),
      );
  }

  protected createForm(): FormGroup {
    return this._fb.group(
      {
        login: [
          null,
          [Validators.required, Validators.minLength(5), Validators.maxLength(24)],
          [this.isExistValidator('login')],
        ],
        name: [null, [Validators.required, Validators.maxLength(64)]],
        surname: [null, [Validators.required, Validators.maxLength(64)]],
        phoneNumber: [
          null,
          [Validators.required, Validators.pattern('[0-9 ]{12}')],
          [this.isExistValidator('phoneNumber')],
        ],
        email: [null, [Validators.required, Validators.email], [this.isExistValidator('email')]],
        password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
        birthDate: [null, [Validators.required]],
      },
      {
        updateOn: 'blur',
      },
    );
  }

  private isExistValidator = (field: string): ValidatorFn => {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersRepository.validateIsFieldExists(field, control.value).pipe(
        map((res) => {
          return res ? { isExist: true } : null;
        }),
      );
    };
  };
}
