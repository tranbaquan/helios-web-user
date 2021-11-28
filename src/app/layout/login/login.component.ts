import { Component, OnInit } from '@angular/core';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;

  faEyeSlash = faEyeSlash;
  faEye = faEye;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.router.navigate(['']).then();
  }

  gotoRegister(): void {
    this.router.navigate(['/register']).then();
  }
}
