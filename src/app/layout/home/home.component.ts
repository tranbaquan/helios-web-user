import { Component, OnInit } from '@angular/core';
import {
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faEye = faEye;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  gotoProductDetail(): void {
    window.scroll(0,0);
    this.router.navigate(['product/detail']).then();
  }
}
