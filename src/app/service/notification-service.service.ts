import { Injectable } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

<<<<<<< HEAD
  //constructor(private toastr: ToastrService) { }

 // showSuccess(message, title){
 //     this.toastr.success(message, title)
 // }
=======
  constructor(public toastr: ToastrService) { }

  // Success Type
  peSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
}
>>>>>>> 157e5a7a7999dc5b8d53e135df0f721f50ebb8c6
}
