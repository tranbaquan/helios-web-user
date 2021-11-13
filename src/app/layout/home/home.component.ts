import { Component, OnInit } from '@angular/core';
import {
  faEye,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
  }

}
