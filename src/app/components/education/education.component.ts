import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  buffer: any;

  constructor(private portfoliodata: PortfolioService )
  {
    
  }

  ngOnInit(): void
  {
    this.portfoliodata.obtainDataEducation().subscribe( data =>
      {
        this.buffer = data;
      });
  }

}
