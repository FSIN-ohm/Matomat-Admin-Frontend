import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  product: any;
  productForm: FormGroup;
  creationModal: boolean = false;
  header: string;
  onClose: Subject<any>;

  categories: any[] = [
    { value: 'drinks', viewValue: 'Getränke' },
    { value: 'snacks', viewValue: 'Snacks' },
  ];

  constructor(public bsModal: BsModalRef, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.productForm = this.createFormGroup(formBuilder);
    this.onClose = new Subject();
  }

  ngOnInit() {
    this.product = new Object();
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      product: formBuilder.group({
        name: ['', Validators.required],
        amount: [''],
        category: [''],
        description: ['']
      })
    });
  }

  show() {
  }

  showEditModal(product) {
    this.header = "Produkt bearbeiten";
    if (product != null) {
      this.product = product;
    }
  }

  showCreationModal() {
    this.header = "Produkt hinzufügen";
    this.creationModal = true;
  }

  onCancel() {
    this.bsModal.hide();
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value.product);
      this.findViewValueOfCategory(this.productForm.value.product.category);
      console.log(this.productForm.value.product);
      if (this.creationModal) {
        // add product
        this.toastr.success('Erfolg', 'Produkt wurde erfolgreich hinzugefügt!', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else {
        // edit product
        this.toastr.success('Erfolg', 'Produkt wurde erfolgreich bearbeitet!', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
        this.productForm.value.id = this.product.id;
      }
      this.onClose.next(this.productForm.value);
      this.bsModal.hide();
    } else {
      this.findInvalidControls(this.productForm);
      this.toastr.error('Error', 'Bitte füllen Sie die fehlenden Felder aus!', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
    }
  }

  findViewValueOfCategory(selectedValue) {
    for (let category of this.categories) {
      if (selectedValue === category.value) {
        this.productForm.value.product.category = category.viewValue;
      }
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
