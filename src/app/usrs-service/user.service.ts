import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUserId(){
    const userId = localStorage.getItem('userId')
    return userId ? Number(userId) : 0;
  }
}
