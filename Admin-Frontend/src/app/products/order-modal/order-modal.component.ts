import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  orderForm: FormGroup;
  product = new Object();
  selectedValue = 'buy';

  constructor(public bsModal: BsModalRef, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.orderForm = this.createFormGroup(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      order: formBuilder.group({
        amount: ['', Validators.required],
        costs: ['', Validators.required],
      })
    });
  }

  changedSelection(event) {
    console.log(event);
    console.log(event.value);
    this.selectedValue = event.value;
  }

  show(product) {
    this.product = product;
    console.log(product);
  }

  cancel() {
    this.bsModal.hide();
  }

  save() {
    console.log("SAVE");
    console.log(this.orderForm.value.order);
    console.log(this.selectedValue);
    if (this.orderForm.valid) {
      this.toastr.success('Bestellung wurde erfolgreich durchgeführt!', 'Erfolg', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
      this.bsModal.hide();
    } else {
      this.findInvalidControls(this.orderForm);
      this.toastr.error('Bitte füllen Sie die fehlenden Felder aus!', 'Error', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
    }
  }

  findInvalidControls(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.findInvalidControls(control);
      }
    })
  }
}
