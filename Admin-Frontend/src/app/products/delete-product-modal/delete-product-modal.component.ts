import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {
  deleteProduct: boolean;
  onClose: Subject<any>;
  
  constructor(public bsModal: BsModalRef, private toastr: ToastrService) { 
    this.onClose = new Subject();
  }

  ngOnInit() {
  }

  show() {
  }

  onCancel() {
    this.deleteProduct = false;
    this.onClose.next(this.deleteProduct);
    this.bsModal.hide();
  }

  onSubmit() {
    this.deleteProduct = true;
    this.toastr.success('Erfolg', 'Produkt wurde erfolgreich gelöscht!', {
      positionClass: 'toast-top-right',
      timeOut: 6000
    });
    this.onClose.next(this.deleteProduct);
    this.bsModal.hide();
  }
}