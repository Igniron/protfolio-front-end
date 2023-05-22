import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  login() {
    // Lógica de inicio de sesión
    // ...

    // Si el inicio de sesión es exitoso
    this.loggedIn.next(true);
  }

  logout() {
    // Lógica de cierre de sesión
    // ...

    this.loggedIn.next(false);
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
