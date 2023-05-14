import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  buffer:any;
  isMenuOpenEducation = false;
  isMenuOpenProject = false;
  
  constructor(private portfoliodata: PortfolioService )
  {

  }
  
  ngOnInit(): void
  {
    this.portfoliodata.obtainData().subscribe( data =>
    {
      this.buffer = data;
    });
  }

  toggleMenuEducation(): void
  {
    this.isMenuOpenEducation = !this.isMenuOpenEducation;

  }

  toggleMenuProject(): void
  {
    this.isMenuOpenProject = !this.isMenuOpenProject;
  }

}
