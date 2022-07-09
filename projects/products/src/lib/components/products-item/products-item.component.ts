import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  public rate = 3.40;
  
  constructor() { }

  ngOnInit(): void {
  }

}
