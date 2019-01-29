import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MatPaginator, MatSort } from '@angular/material';
import { AccountManagementSource } from '../account-management/account-management-source';
import { Account } from '../account-management/account';
import { ProductsSource } from '../products/products-source';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { Product } from './product';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProductsSource;

  columnsToDisplay = ['productName', 'amount', 'reorderLevel', 'costs', 'settings'];

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.dataSource = new ProductsSource(this.paginator, this.sort);
  }


  editProduct(product) {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(ProductModalComponent);
    (<ProductModalComponent>modalRef.content).showEditModal(product);
    modalRef.content.onClose.subscribe(result => {
      console.log(result);
      this.updateData(result.product, result.id);
    });
  }

  updateData(newProduct, id) {
    for (let product of this.dataSource.data) {
      if (product.id === id) {
        product.name = newProduct.name;
        product.amount = newProduct.amount;
        product.category = newProduct.category;
        product.description = newProduct.description;
        return;
      }
    }
  }

  orderStuff() {
    // let config = {
    //   backdrop: false,
    //   ignoreBackdropClick: true
    // };
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(OrderModalComponent);
    (<OrderModalComponent>modalRef.content).show();
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
        category: result.product.category,
        description: result.product.description
      }
      this.dataSource.data.push(data);
      console.log(this.dataSource);
      this.dataSource.connect(); // updaten
    });
  }

  deleteProduct(product) {
    const index = this.dataSource.data.indexOf(product);
    if (product.id > -1) {
      let deleteProduct;
      const modalService: BsModalService = this.injector.get(BsModalService);
      const modalRef = modalService.show(DeleteProductModalComponent);
      (<DeleteProductModalComponent>modalRef.content).show();
      modalRef.content.onClose.subscribe(result => {
        deleteProduct = result;
        if (deleteProduct) {
          this.dataSource.data.splice(index, 1);
          this.dataSource.connect(); // updaten
        }
      });
    }
  }
}