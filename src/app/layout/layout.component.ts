import { Component, OnInit } from '@angular/core';
import {faSearch, faBars, faShoppingBag, faPercent, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  faSearch = faSearch;
  faBars = faBars;
  faShoppingBag = faShoppingBag;
  faPercent = faPercent;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
