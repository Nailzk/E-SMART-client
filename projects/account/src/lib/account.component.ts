import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IAccountRoutingMenu } from './interface';
import { AccountService } from './account.service';

@Component({
  selector: 'lib-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public userIcon = faUser;

  public accountMenu: IAccountRoutingMenu[] = [];

  constructor(private readonly _accountService: AccountService) { }

  ngOnInit(): void {
    this.accountMenu = this._accountService.accountMenuList;
  }

}
