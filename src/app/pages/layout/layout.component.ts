import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData: any;
  constructor(private router:Router) { 
    const localData = localStorage.getItem('hotelUser');
    if(localData != null){
      this.loggedUserData = JSON.parse(localData); //covert in ot object format
    }
  }


  onLogoff(){
    localStorage.removeItem('hotelUser');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('login');
  }

}
