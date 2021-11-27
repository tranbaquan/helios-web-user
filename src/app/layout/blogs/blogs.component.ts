import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
