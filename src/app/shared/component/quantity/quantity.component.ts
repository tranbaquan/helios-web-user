import { Component, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  quantity = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plus(): void {
    this.quantity += 1;
  }

  minus(): void {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }
}
