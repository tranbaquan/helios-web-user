import {Component, OnInit} from '@angular/core';
import {faShareAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  faShareAlt = faShareAlt;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
  }

}
