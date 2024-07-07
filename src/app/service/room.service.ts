import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiEndPoint:string = "https://freeapi.miniprojectideas.com/api/HotelBooking/"
  constructor(private http:HttpClient) { }

  login(obj:any){
    return this.http.post(this.apiEndPoint + 'Login', obj);
  }

  getAllRooms(){
    return this.http.get(this.apiEndPoint + 'GetAllRooms');
  }

  saveUpdateRooms(obj:any){
    return this.http.post(this.apiEndPoint + 'AddUpdateBulkRooms',obj);
  }

  deleteRoom(id:any){
    return this.http.delete(this.apiEndPoint + 'DeleteRoomByRoomId?roomId='+id);
  }

  // ****************Customers***************************

  GetAllCustomers(){
   return this.http.get(this.apiEndPoint + 'GetAllCustomers');
  }

  // ****************Users***************************
  GetAllUsers(){
    return this.http.get(this.apiEndPoint + 'GetAllUsers');
  }

  AddUpdateUser(obj:any){
    return this.http.post(this.apiEndPoint + 'AddUpdateUser',obj);
  }
  DeleteUser(id:any){
    return this.http.delete(this.apiEndPoint + 'DeleteUserByUserId?userId='+id);
  }


  // ****************Booking-calender***************************
  GetBookingsByMonth(month:number){
    return this.http.get(this.apiEndPoint + 'GetBookingsByMonth?month='+month)
  }

  // ****************New Booking***************************

  createBooking(obj:any){
    return this.http.post(this.apiEndPoint + 'BookRoom',obj)
  }


}
