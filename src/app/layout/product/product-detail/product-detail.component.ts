import { Component, OnInit } from '@angular/core';
import {faStar, faShoppingBag, faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  faStar = faStar;
  faShoppingBag = faShoppingBag;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  activeInfo = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
