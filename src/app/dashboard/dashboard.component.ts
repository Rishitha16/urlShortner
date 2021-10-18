import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shortenUrl: string = "";

  constructor(private urlService: UrlService) { }


  ngOnInit(): void {
  }

  add(url: string): void {
    url = url.trim();
    
    if (!url) return;

    this.urlService.save(url).subscribe(res => this.shortenUrl = window.location.href + res.id);
  }

}