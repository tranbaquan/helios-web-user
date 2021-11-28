import { Component, OnInit } from '@angular/core';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword = false;
  showRePassword = false;

  faEyeSlash = faEyeSlash;
  faEye = faEye;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  isShowRePassword(): void {
    this.showRePassword = !this.showRePassword;
  }

  register(): void {
    this.router.navigate(['']).then();
  }

  gotoLogin(): void {
    this.router.navigate(['/login']).then();
  }
}
