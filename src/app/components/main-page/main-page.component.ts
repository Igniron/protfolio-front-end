import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  constructor(private portfoliodata: PortfolioService) {}

  ngOnInit(): void
  {
    this.portfoliodata.checkAuth();
  }

}
