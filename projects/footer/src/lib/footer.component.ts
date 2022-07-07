import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { IFooterInfoItem, ISocialInfo } from './interface';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public infoItems: IFooterInfoItem[] = [];
  public socialItems: ISocialInfo[] = [];

  constructor(private readonly _footerService: FooterService) {}

  ngOnInit(): void {
    this.infoItems = this._footerService.infoItems;
    this.socialItems = this._footerService.socialItems;
  }


}
