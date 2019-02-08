import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductsSource } from '../products/products-source';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { Product } from './product';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(DataTableComponent) table: DataTableComponent;
  @ViewChild(OrderFormComponent) order: OrderFormComponent;
  dataSource: ProductsSource;

  columnsToDisplay = ['name', 'amount', 'reorderLevel', 'costs'];

  constructor(private injector: Injector) { }

  ngOnInit() {
  }


  editProduct(product) {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(ProductModalComponent);
    (<ProductModalComponent>modalRef.content).showEditModal(product);
    modalRef.content.onClose.subscribe(result => {
      this.updateData(result.product, result.id);
    });
  }

  updateData(newProduct, id) {
    for (let product of this.table.dataSource.data) {
      if (product.id === id) {
        product.name = newProduct.name;
        product.amount = newProduct.amount;
        product.reorderLevel = newProduct.reorderLevel;
        product.costs = newProduct.costs;
        return;
      }
    }
  }

  orderStuff(product) {
    console.log("order");
    console.log(product);
    this.order.addProduct(product);
    // TODO: Logic

    // let config = {
    //   backdrop: false,
    //   ignoreBackdropClick: true
    // };
    // const modalService: BsModalService = this.injector.get(BsModalService);
    // const modalRef = modalService.show(OrderModalComponent);
    // (<OrderModalComponent>modalRef.content).show();
  }

  addProduct() {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(ProductModalComponent);
    (<ProductModalComponent>modalRef.content).showCreationModal();
    console.log(modalRef.content);
    modalRef.content.onClose.subscribe(result => {
      const data: Product = {
        id: 1,
        name: result.product.name,
        amount: result.product.amount,
        reorderLevel: result.product.reorderLevel,
        costs: result.product.costs
      }
      this.table.dataSource.data.push(data);
      this.table.dataSource.connect(); // updaten
    });
  }

  deleteProduct(product) {
    if (confirm("Wollen Sie dieses Produkt endgültig löschen?")) {
      const index = this.table.dataSource.data.indexOf(product);
      if (product.id > -1) {
        this.table.dataSource.data.splice(index, 1);
        this.table.dataSource.connect(); // updaten
      }
    }
  }
}