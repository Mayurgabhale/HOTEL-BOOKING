import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-new-booking',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent implements OnInit {

  bookingObj:any={
    
      "name": "",
      "mobileNo": "",
      "email": "",
      "aadharNo": "",
      "city": "",
      "address": "",
      "bookingId": 0,
      "roomId": 0,
      "customerId": 0,
      "bookingFromDate": "",
      "bookingToDate": "",
      "createdDate": new Date(),
      "bookingRate": 0,
      "naration": "",
      "createdBy": 0,
      "hotelBookingDetails": [
        
      ]
  };

  guestObj:any ={
    
      "bookingDetailId": 0,
      "bookingId": 0,
      "customerName": "",
      "aadharCardNo": ""
    
  }

  roomList: any []=[];

  loggedUserData: any;


  constructor(private roomSrv:RoomService){
    const localData = localStorage.getItem('hotelUser');
    if(localData != null){
      this.loggedUserData = JSON.parse(localData); //covert in ot object format
    }
  }

  ngOnInit(): void {
    this.loadRoom()
  }

  loadRoom(){
    this.roomSrv.getAllRooms().subscribe((res:any)=>{
      this.roomList = res.data
    })
  }



  AddGuest(){
    const obj = JSON.stringify(this.guestObj);
    const parserObj =   JSON.parse(obj);
    this.bookingObj.hotelBookingDetails.unshift(parserObj)
  }

  removeGuest(index:number){
    this.bookingObj.hotelBookingDetails.splice(index,1);
  }

  onSavebooking(){
    this.bookingObj.createdBy = this.loggedUserData?.userId;
    this.roomSrv.createBooking(this.bookingObj).subscribe((res:any)=>{
      if(res.data){
        alert('Booking Created')
      }else{
        alert(res.message)
      }
    })
  }


  
    
}
