import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-page-redirect',
  templateUrl: './page-redirect.component.html',
  styleUrls: ['./page-redirect.component.css']
})
export class PageRedirectComponent implements OnInit {

  constructor(private service: UrlService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.service.findById(params['id']).subscribe(res => window.location.href = res.url);
    });
  }

}