import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  UserList: any[] = [];

  userObj: any = {
    "userId": 0,
    "userName": "",
    "password": "",
    "role": ""
  }

  constructor(private roomSrv: RoomService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.roomSrv.GetAllUsers().subscribe((res: any) => {
      this.UserList = res.data
    })
  }

  onSaveUsers() {
    this.roomSrv.AddUpdateUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('User Created Success')
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: any) {
    const strObj = JSON.stringify(data);
    this.userObj = JSON.parse(strObj);
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want ot Delete");
    if(isDelete){
      this.roomSrv.DeleteUser(id).subscribe((res: any) => {
        if (res.result) {
          alert("User Delete")
          this.getAllUsers();
  
        } else {
          alert(res.message)
        }
      })
    }
    
  }

}
