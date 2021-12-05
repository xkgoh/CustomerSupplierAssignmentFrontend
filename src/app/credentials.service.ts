import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  username: string =""
  password: string = ""

  constructor() { }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}
