export class DefaultErrorHandler {
  constructor(private component: { _getError: (key: string, errors: any) => string }) {}

  getError(key: string, errors: any): string {
    return this.component._getError(key, errors);
  }
}
