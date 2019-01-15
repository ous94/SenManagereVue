import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(public toastr: ToastrService) { }

  // Success Type
  peSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
}
}
