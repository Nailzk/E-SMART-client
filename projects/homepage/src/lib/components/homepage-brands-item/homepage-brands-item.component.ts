import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from 'communication';

@Component({
  selector: 'lib-homepage-brands-item',
  templateUrl: './homepage-brands-item.component.html',
  styleUrls: ['./homepage-brands-item.component.scss'],
})
export class HomepageBrandsItemComponent implements OnInit {
  @Input() item: IBrand | undefined;

  constructor() {}

  ngOnInit(): void {}
}
