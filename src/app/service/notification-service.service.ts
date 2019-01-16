import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
>>>>>>> 1f1a25a9827ca41b98164390f805fe9e4517de80
}
