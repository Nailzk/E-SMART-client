import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'communication';

@Component({
  selector: 'lib-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  @Input() item: IProduct | undefined;
  
  public rate = 3.40;
  
  constructor() { }

  ngOnInit(): void {
  }

}
