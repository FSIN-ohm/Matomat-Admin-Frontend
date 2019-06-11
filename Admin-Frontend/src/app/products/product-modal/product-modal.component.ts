import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  providers: [DataService]
})
export class ProductModalComponent implements OnInit {
  selectedFile: ImageSnippet;

  product: any;
  productForm: FormGroup;
  header: string;
  onClose: Subject<any>;

  constructor(public bsModal: BsModalRef, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.productForm = this.createFormGroup(formBuilder);
    this.onClose = new Subject();
  }

  ngOnInit() {
    this.product = new Object();
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ['', Validators.required],
      reorder_point: 0,
      price: 0,
      items_per_crate: 0,
      thumbnail: [''],
      is_available: false, // nicht für post, aber für patch
      barcode: [''] // für beides
    });
  }

  initWithData(product) {
    console.log(product);
    this.productForm.patchValue({
      name: product.name,
      items_per_crate: product.items_per_crate,
      reorder_point: product.reorder_point,
      price: product.price,
      thumbnail: product.thumbnail,
      is_available: product.is_available,
      barcode: product.barcode
    });
  }

  show() {
  }

  showEditModal(product) {
    this.header = "Produkt bearbeiten";
    if (product != null) {
      this.mapProduct(product);
      this.initWithData(product);
    }
  }

  showCreationModal() {
    this.header = "Produkt hinzufügen";
  }

  cancel() {
    this.bsModal.hide();
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.mapProduct(this.productForm.value);
      this.onClose.next(this.product);
      console.log(this.product);
      this.bsModal.hide();
    } else {
      this.findInvalidControls(this.productForm);
      this.toastr.error('Bitte füllen Sie die fehlenden Felder aus!', 'Error', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
    }
  }

  mapProduct(productForm) {
    console.log(this.product);
    console.log(productForm);
    console.log(productForm.barcode);
    if(typeof(productForm.barcode) !== 'undefined') {
      console.log("NOT EMPTY");
      this.product.barcode = productForm.barcode;
    }
    this.product.name = productForm.name;
    this.product.thumbnail = productForm.thumbnail;
    this.product.reorder_point = productForm.reorder_point;
    this.product.price = productForm.price;
    this.product.items_per_crate = productForm.items_per_crate;
    this.product.is_available = productForm.is_available;
    this.product.barcode = productForm.barcode;
    console.log(this.product);
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
