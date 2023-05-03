import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  buffer: any;

  constructor(private portfoliodata: PortfolioService )
  {
    
  }

  ngOnInit(): void
  {
    this.portfoliodata.obtainData().subscribe( data =>
      {
        this.buffer = data.contact;
      });
  }

}
