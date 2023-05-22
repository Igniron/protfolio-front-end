import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css']
})
export class RecentProjectsComponent {

  buffer: any;

  constructor(private portfoliodata: PortfolioService )
  {
    
  }

  ngOnInit(): void
  {
    this.portfoliodata.obtainDataProject().subscribe( data =>
      {
        this.buffer = data;
      });
  }

}
