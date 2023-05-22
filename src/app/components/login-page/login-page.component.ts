import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PortfolioService } from 'src/app/service/portfolio.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(private authService: AuthService, private router: Router, private portfoliodata: PortfolioService) { }

  user:any;
  pass:any;

  login(): void
  {
    this.authService.gerUsername().subscribe((result)=>
    {
      if (result[0].user === this.user && result[0].password === this.pass)
      {
        this.router.navigate(['/admin'])
        this.portfoliodata.toggleLogin();
      }
      else
      {
        this.router.navigate(['/home'])
      }
    })
  }
}
