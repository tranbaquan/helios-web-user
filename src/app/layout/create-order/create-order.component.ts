import {Component, OnInit} from '@angular/core';
import {faMapMarkerAlt, faTrash, faMoneyBill} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faTrash = faTrash;
  faMoneyBill = faMoneyBill;

  constructor() {
  }

  ngOnInit(): void {
  }

}
