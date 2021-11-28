import { Component, OnInit } from '@angular/core';
import {faStar, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  faStar = faStar;
  faShoppingBag = faShoppingBag;

  activeInfo = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
