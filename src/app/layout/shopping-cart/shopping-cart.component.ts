import { Component, OnInit } from '@angular/core';
import {faTrashAlt, faHeart, faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faHeart = faHeart;
  faMoneyBill = faMoneyBill;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createOrder(): void {
    window.scroll(0,0);
    this.router.navigate(['create-order']).then();
  }
}
