import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';
import { UsersComponent } from './pages/users/users.component';
import { CustomerComponent } from './pages/customer/customer.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'rooms',
                component:RoomsComponent
            },
            {
                path:'new-Booking',
                component:NewBookingComponent
            },
            
            {
                path:'booking-calender',
                component:BookingCalenderComponent
            },
            {
                path:'users',
                component:UsersComponent
            },
            {
                path:'customers',
                component:CustomerComponent
            }
        ]
    }
];
