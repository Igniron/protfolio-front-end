import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor( private http:HttpClient, private router: Router ) { }

  private isLogged = false;

  toggleLogin():void
  {
    this.isLogged = !this.isLogged;
    console.log("Login: " + this.isLogged);
  }

  checkAuth():void
  {
    if(this.isLogged === true)
    {
      this.router.navigate(['/admin'])
    }
    else
    {
      this.router.navigate(['/home'])
    }
  }

  obtainDataHeader ():Observable<any>
  {
    return this.http.get( url + '/get/person');
  }

  obtainDataEducation ():Observable<any>
  {
    return this.http.get( url + '/get/education' );
  }

  obtainDataProject ():Observable<any>
  {
    return this.http.get( url + '/get/project' );
  }

  obtainDataContact ():Observable<any>
  {
    return this.http.get( url + '/get/contact' );
  }

}
