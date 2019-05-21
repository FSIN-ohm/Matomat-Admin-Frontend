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
  creationModal: boolean = false;
  header: string;
  onClose: Subject<any>;

  constructor(public bsModal: BsModalRef, private formBuilder: FormBuilder, private toastr: ToastrService, private dataService: DataService) {
    console.log("CONSTRUCTOR");
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
        reorderLevel: [''],
        costs: [''],
        items_per_crate: [''],
        img: ['']
      })
    });
  }

  // changeImage(imageInput) {
  //   console.log(imageInput);
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.dataService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (err) => {
  //         console.log(err);
  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }

  initWithData(product) {
    this.productForm.controls.product.patchValue({
      name: product.name,
      amount: product.amount,
      reorderLevel: product.reorderLevel,
      costs: product.costs,
      // img: product.img,
    });
  }

  show() {
  }

  showEditModal(product) {
    this.header = "Produkt bearbeiten";
    if (product != null) {
      this.product = product;
      this.initWithData(product);
    }
  }

  showCreationModal() {
    this.header = "Produkt hinzufügen";
    this.creationModal = true;
  }

  cancel() {
    this.bsModal.hide();
  }

  save() {
    if (this.productForm.valid) {
      if (this.creationModal) {
        // add product
        this.toastr.success('Produkt wurde erfolgreich hinzugefügt!', 'Erfolg', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else {
        // edit product
        this.toastr.success('Produkt wurde erfolgreich bearbeitet!', 'Erfolg', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
        this.productForm.value.id = this.product.id;
      }
      this.onClose.next(this.productForm.value);
      this.bsModal.hide();
    } else {
      this.findInvalidControls(this.productForm);
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
