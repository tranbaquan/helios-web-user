import { Component, OnInit } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
