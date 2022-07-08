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
      { name: 'Blog', link: '/blog' },
      { name: 'Contacts', link: '/contact' },
    ];
  }
}
