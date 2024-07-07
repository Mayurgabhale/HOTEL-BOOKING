import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "phone": "",
    "password": ""
  };
  constructor(private roomSrv: RoomService,private router:Router) { }

  onLogin() {
    this.roomSrv.login(this.loginObj).subscribe((res: any) => {
      if(res.result){
        localStorage.setItem('hotelUser',JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }else{
        alert('Check User Credentials')
      }
    },
      error => {

      })
  }

}
