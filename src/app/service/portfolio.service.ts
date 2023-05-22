import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor( private http:HttpClient ) { }


  obtainData ():Observable<any>
  {
    return this.http.get('./assets/data/data.json');
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
