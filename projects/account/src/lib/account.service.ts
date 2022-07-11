import { Injectable } from '@angular/core';
import {
  faAddressBook, faGear,
  faList
} from '@fortawesome/free-solid-svg-icons';
import { IAccountRoutingMenu } from './interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public get accountMenuList(): IAccountRoutingMenu[] {
    return [
      { name: 'Settings', icon: faGear, link: './settings' },
      { name: 'Addresses', icon: faAddressBook, link: './addresses' },
      { name: 'Orders', icon: faList, link: './orders' },
    ];
  }
}
