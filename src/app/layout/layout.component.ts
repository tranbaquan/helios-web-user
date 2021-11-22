import { Component, OnInit } from '@angular/core';
import {faSearch, faBars, faShoppingBag, faPercent, faUser, faTruck, faUserCheck, faMoneyCheckAlt, faUserShield} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

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
  faTruck = faTruck;
  faUserCheck = faUserCheck;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faUserShield = faUserShield;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['login']).then();
  }

  register(): void {
    this.router.navigate(['register']).then();
  }

  gotoCart(): void {
    this.router.navigate(['cart']).then();
  }
}
