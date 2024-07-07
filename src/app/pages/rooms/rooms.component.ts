import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  roomsList: any[] = []
  // roomObj:any={
  //   "roomId": 0,
  //   "roomName": "",
  //   "isAcAvailable": false,
  //   "roomCapacity": 0,
  //   "isActive": false,
  //   "roomTariff": 0,
  //   "extensionNo": ""
  // }


  constructor(private roomSrv: RoomService) { }

  ngOnInit(): void {
    this.getAllRooms();
  }


  getAllRooms() {
    this.roomSrv.getAllRooms().subscribe((res: any) => {
      this.roomsList = res.data;
    })
  }

  AddNewRoom() {
    const obj = {
      "roomId": 0,
      "roomName": "",
      "isAcAvailable": false,
      "roomCapacity": 0,
      "isActive": false,
      "roomTariff": 0,
      "extensionNo": ""
    }
    this.roomsList.unshift(obj);
  }

  saveRooms() {
    this.roomSrv.saveUpdateRooms(this.roomsList).subscribe((Res: any) => {
      if (Res.result) {
        alert("Data Updated Success")
      } else {
        alert(Res.message)
      }
    })
  }


  onDelete(id: number) {
    this.roomSrv.deleteRoom(id).subscribe((res: any) => {
      if (res.result) {
        alert('Room Deleted Success');
        this.getAllRooms();
      } else {
        alert(res.message)
      }
    })
  }
  
  
}