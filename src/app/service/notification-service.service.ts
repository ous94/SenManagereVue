import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private toastr: ToastrService) { }

 showSuccess(message, title){
     this.toastr.success(message, title)

}

}
