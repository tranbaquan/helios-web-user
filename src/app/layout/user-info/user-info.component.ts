import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faTrash, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  faTrash = faTrash;
  faShoppingBag = faShoppingBag;

  activeTab: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.activeTab = 'all';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.activeTab = params.tab ? params.tab : 'all';
    });
  }

  switchTab(tab: string): void {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {tab}
    });
  }

  logout(): void {

  }

  editAddress(): void {
    this.switchTab('edit-address');
  }

  viewOrderDetail(): void {
    this.switchTab('order-detail');
  }
}
