import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpRepository, IBaseItem, IPaginationResponse } from 'communication';
import { finalize } from 'rxjs';
import * as _ from 'underscore';
import { DefaultErrorHandler } from './error-handler';
import { IErrorHandler, IErrorMessage } from './interface';
import { LoadingComponent } from './loading.component';

@UntilDestroy()
@Component({ template: '' })
export class FormsComponent<T extends IBaseItem> extends LoadingComponent<T> implements OnInit {
  form: FormGroup;

  errors: any = {};

  protected errorMessages: any = {};
  protected formErrors: any = {};

  private _errorHandler: IErrorHandler = new DefaultErrorHandler(this as any);

  constructor(
    @Inject(HttpRepository) protected _repository?: HttpRepository<T>,
    @Optional() @Inject(Injector) protected _injector?: Injector,
  ) {
    super();
  }

  public get loading(): boolean {
    return this.isLoading;
  }

  protected get formValues(): any {
    return this.form.value;
  }

  ngOnInit() {
    super.ngOnInit();

    const form = this.createForm();

    form.statusChanges.subscribe(() => this._handleStatusChange(form))

    if (!this.autoLoadConfig) return;

    if (this.autoLoadConfig.onInit) this.loadData();
    if (this.autoLoadConfig.onParamsChanges) this.loadOnParamsChanges();
    if (this.autoLoadConfig.onQueryChanges) this.loadOnQueryParamsChanges();

    this.form = form;
    this._handleStatusChange(form);
  }

  public patchForm(controls: { [key: string]: any }) {
    this.form.patchValue(controls);
  }

  protected createForm(): FormGroup {
    return new FormGroup({});
  }

  protected validateForm() {
    const controls = this.form.controls;

    for (const key in controls)
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];
        control.markAsTouched({ onlySelf: true });
        control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      }

    this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  protected _handleStatusChange(form: FormGroup) {
    const controls = form.controls;
    const errors: any = {};

    for (const key in controls)
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];
        errors[key] =
          (control.dirty || control.touched) && control.invalid
            ? this._errorHandler.getError(key, control.errors)
            : '';
      }

    this.errors = errors;
  }

  protected _getError(key: string, errors: any): string {
    console.log('some key of error', key, errors);
    const errorMessages: IErrorMessage = this.errorMessages[key];
    const errorKey = Object.keys(errors)[0];

    if (errorMessages && typeof errorMessages[errorKey] === 'string') return errorMessages[errorKey] as string;

    return 'Error';
  }

  protected loadData(params?: any) {
    const limit = params?.limit ? params.limit : this.defaultLimit;
    const skip = this.skip;
    const loading = this.showLoading();

    this._repository
      ?.getItems({ ...params, limit, skip })
      .pipe(
        untilDestroyed(this),
        finalize(() => loading()),
      )
      .subscribe(
        (res: IPaginationResponse<any>) => {
          const data = res.data ?? [];
          this.builder.replaceItems(data);
        },
        (err) => this.showError(err),
      );
  }

  protected loadMore(): void {
    this.skip += this.defaultLimit;
    this.loadData();
  }

  protected refresh(): void {
    this.skip = 0;
    this.loadData();
  }

  protected loadOnParamsChanges(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      this.loadData(params);
    });
  }

  protected loadOnQueryParamsChanges(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      this.loadData(params);
    });
  }

  private _subscribeOnFormChanges() {
    this.form.valueChanges.subscribe((form) => {
      // this._handleStatusChange(this.form);
    });
  }

  private _handleFormErrors() {
    const controls = this.form.controls;

    Object.keys(controls).forEach((val) => {
      const errors = controls[val].errors;

      if (!_.isEmpty(errors) && errors) {
        Object.keys(errors).forEach((error) => {
          this.formErrors[val] = { [error]: error };
        });
      }
    });

    this._setErrorMessages();
  }

  private _setErrorMessages() {
    const formErrors = this.formErrors;

    Object.keys(formErrors).forEach((val) => {
      if (_.isObject(formErrors[val])) {
        const controlMessages = this.errorMessages[val];
        this.errors = {};

        if (!controlMessages) this.errors[val] = 'error';
        else {
          const nestedField = (Object.values(formErrors[val]) as string[])[0] || 'error';

          const error = controlMessages[nestedField] ?? 'error';
          this.errors[val] = error;
        }
      }
    });
  }
}
