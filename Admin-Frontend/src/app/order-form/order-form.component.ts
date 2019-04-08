import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  changedSelection(event) {
    this.selectedValue = event.value;
  }

  addProduct(product) {
    const foundProduct = this.findDuplicateProduct(product.id);
    if (foundProduct === null) {
      let data = {
        id: product.id,
        name: product.name,
        count: +1
      }
      this.products.push(data);
    } else {
      console.log("INCREASE");
      this.increaseNumber(foundProduct);
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

  save() {
    if (confirm("Möchten sie den Einkauf jetzt einbuchen?")) {
      console.log("Erfolgreich bestellt");
      this.closeSidaBar.emit(true);
      this.products = [];
      this.toastr.success('Bestellung war erfolgreich!', 'Erfolg', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
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

  increaseNumber(product) {
    product.count = product.count + 1;
  }
}