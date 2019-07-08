import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
private apikey = 'AIzaSyBXzle59Uenh2xXo5ruJoc0zAcjYfpile8';

// Crear nuevo usuario
// https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

// Login
// https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]


  constructor( private http: HttpClient ) { }

  logout(){

  }

  login( usuario: UsuarioModel ) {

  }

  newUser( usuario: UsuarioModel ){
    
  }
}
