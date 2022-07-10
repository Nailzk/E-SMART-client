export interface IErrorHandler {
  getError(key: string, errors: any): string;
}
