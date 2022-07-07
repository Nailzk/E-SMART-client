import { Injectable } from '@angular/core';
import { IHeaderMenu } from './interface';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  public get menuList(): IHeaderMenu[] {
    return [
      { name: 'Home', link: '/home' },
      { name: 'Categories', link: '' },
      { name: 'Home', link: '/blog' },
      { name: 'Home', link: '/contact' },
    ];
  }
}
