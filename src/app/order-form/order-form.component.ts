import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductModalComponent } from '../products/product-modal/product-modal.component';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  // TODO: Input id, name, costs, amountGewünscht
  @Output() closeSidaBar = new EventEmitter<boolean>();
  products: any[] = [];
  selectedValue = 'buy';
  orderForm: FormGroup;
  orders: FormArray;
  count: number[] = [];

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private dataService: DataService) {
    this.orderForm = this.createFormGroup(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      amount: 0,
      orders: formBuilder.array([this.createOrderItem()])
    });
  }

  createOrderItem(): FormGroup {
    return this.formBuilder.group({
      product_info: [''],
      name: [''],
      amount: 0
    });
  }

  changedSelection(event) {
    this.selectedValue = event.value;
  }

  addItem(): void {
    this.orders = this.orderForm.get('orders') as FormArray;
    this.orders.push(this.createOrderItem());
  }

  addProduct(product) {
    this.addItem();
    const foundProduct = this.findDuplicateProduct(product.id);
    if (foundProduct === null) {
      let data = {
        id: product.id,
        name: product.name,
        count: 1
      };
      this.count[product.id] = 1;
      this.products.push(data);
    } else {
      console.log("ELSE");
      console.log(this.count);
      this.count[product.id] += 1;
      foundProduct.count = this.count[product.id];
    }
  }

  deleteProduct(product) {
    if (confirm("Wollen Sie dieses Produkt aus dem Warenkorb entfernen?")) {
      const index = this.products.indexOf(product);
      if (product.id > -1) {
        this.products.splice(index, 1);
      }
    }
  }

  cancel() {
    if (confirm("Wollen Sie den Einkauf abbrechen?")) {
      console.log("Cancel");
      this.closeSidaBar.emit(true);
      this.products = [];
    }
  }

  mapOrderProducts(): any {
    let jsonObject = new Object({
      amount: this.orderForm.value.amount,
      orders: []
    });

    for (let prod of this.products) {
      let data = new Object({
        product_info: prod.id,
        amount: prod.count
      });
      jsonObject['orders'].push(data);
    }
    return jsonObject;
  }

  mapPurchaseProducts(): any {
    let jsonObject = new Object({
      orders: []
    });

    for (let prod of this.products) {
      let data = new Object({
        product: prod.id,
        amount: prod.count
      });
      jsonObject['orders'].push(data);
    }
    return jsonObject;
  }

  onSubmit() {
    console.log("SUBMIT");
    console.log(this.orderForm);
    if (confirm("Möchten sie den Einkauf jetzt einbuchen?")) {
      if (this.selectedValue === 'buy') {
        let jsonObject = this.mapOrderProducts();
        this.dataService.makeOrderTransaction(jsonObject).subscribe(
          res => {
            this.closeSidaBar.emit(true);
            this.products = [];
            this.toastr.success('Bestellung war erfolgreich!', 'Erfolg', {
              positionClass: 'toast-top-right',
              timeOut: 6000
            });
          },
          error => console.log(error)
        );
      }
      else {
        let jsonObject = this.mapPurchaseProducts();
        this.dataService.makePurchaseTransaction(jsonObject).subscribe(
          res => {
            this.closeSidaBar.emit(true);
            this.products = [];
            this.toastr.success('Bestellung war erfolgreich!', 'Erfolg', {
              positionClass: 'toast-top-right',
              timeOut: 6000
            });
          },
          error => console.log(error)
        );
      }
    }
  }

  findDuplicateProduct(id) {
    for (let product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
    return null;
  }
}
