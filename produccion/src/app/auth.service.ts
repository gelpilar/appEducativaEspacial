import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedValue = false;

  setAuthenticated(value: boolean) {
    this.isAuthenticatedValue = value;
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }
}
