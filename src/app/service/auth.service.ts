import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService 
{
    private url = 'https://portfolio-backend-r88w.onrender.com/get/user?id=1';

    constructor (private http: HttpClient) { }

    gerUsername():Observable<any>
    {
        return this.http.get( this.url );
    }

}