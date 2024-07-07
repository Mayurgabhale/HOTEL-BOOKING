import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customerList:any[]=[]
  constructor(private roomSrv:RoomService){ }

  ngOnInit(): void {
   this.getCustomers();
  }

  getCustomers(){
    this.roomSrv.GetAllCustomers().subscribe((res:any)=>{
      this.customerList = res.data
    })
  }

}
