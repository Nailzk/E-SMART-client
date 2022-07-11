import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { IAccountRoutingMenu } from './interface';
import { AccountService } from './account.service';
import { User } from 'user';
import { IUser } from '../../../communication/src/lib/models/user';

@Component({
  selector: 'lib-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public userIcon = faUser;
  public faLogOut = faArrowRightFromBracket;

  public accountMenu: IAccountRoutingMenu[] = [];

  public fullName: string;

  constructor(private readonly _accountService: AccountService, private readonly _user: User) {}

  ngOnInit(): void {
    this.accountMenu = this._accountService.accountMenuList;
    this.fullName = this._user.fullName;
  }

  public logOut(): void {
    this._user.logOut();
  }
}
