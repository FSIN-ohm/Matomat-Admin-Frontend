import { Component, OnInit, Injector } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectProductsModalComponent } from '../select-products-modal/select-products-modal.component';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  selectedProducts = false;
  companies: any[] = [
    {value: 'comp-0', viewValue: 'Edeka'},
    {value: 'comp-1', viewValue: 'Loscher'},
  ];

  constructor(public bsModal: BsModalRef, private injector: Injector) { }

  ngOnInit() {
  }

  show() {
  }

  addProduct() {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(SelectProductsModalComponent);
    (<SelectProductsModalComponent>modalRef.content).show();
    modalRef.content.onClose.subscribe(result => {
      console.log(result);
    });
  }

  onCancel() {
    this.bsModal.hide();
  }

  onSubmit() {
    this.bsModal.hide();
  }
}
