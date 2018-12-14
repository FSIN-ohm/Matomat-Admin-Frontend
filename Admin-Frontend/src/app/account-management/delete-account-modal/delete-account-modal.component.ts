import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-account-modal',
  templateUrl: './delete-account-modal.component.html',
  styleUrls: ['./delete-account-modal.component.scss']
})
export class DeleteAccountModalComponent implements OnInit {
  deleteAccount: boolean;
  onClose: Subject<any>;
  
  constructor(public bsModal: BsModalRef, private toastr: ToastrService) { 
    this.onClose = new Subject();
  }

  ngOnInit() {
  }

  show() {
  }

  onCancel() {
    this.deleteAccount = false;
    this.onClose.next(this.deleteAccount);
    this.bsModal.hide();
  }

  onSubmit() {
    this.deleteAccount = true;
    this.toastr.success('Success', 'deleted account successfully!', {
      positionClass: 'toast-top-right',
      timeOut: 6000
    });
    this.onClose.next(this.deleteAccount);
    this.bsModal.hide();
  }
}
