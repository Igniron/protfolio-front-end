import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  buffer:any;

  constructor(private portfoliodata: PortfolioService )
  {

  }
  
  ngOnInit(): void
  {
    this.portfoliodata.obtainData().subscribe( data =>
      {
        console.log(data);
        this.buffer = data.header;
      });
  }

}
