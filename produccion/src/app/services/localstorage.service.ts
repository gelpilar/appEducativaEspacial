import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, data);
    } catch (e) {
      console.log(e);
    }
  }

  get(key: string): any {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
}
