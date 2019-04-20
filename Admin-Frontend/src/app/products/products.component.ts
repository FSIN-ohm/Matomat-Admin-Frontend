import { Component, OnInit, Injector, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(DataTableComponent) table: DataTableComponent;
  @ViewChild('order') order: OrderFormComponent;

  openOrderSideBar: boolean = false;
  products: any;

  sideBarVisible: boolean = false;

  columnsToDisplay = ['thumbnail', 'name', 'price', 'reorder_point', 'is_available', 'items_per_crate'];

  constructor(private injector: Injector, private dataService: DataService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    console.log("GET");
    this.dataService.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
      console.log(this.products);
    })
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

  orderProduct(product) {
    this.sideBarVisible = true;
    this.changeDetector.detectChanges();
    this.order.addProduct(product);
  }

  addProduct() {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(ProductModalComponent);
    (<ProductModalComponent>modalRef.content).showCreationModal();
    modalRef.content.onClose.subscribe(result => {
      console.log(result);

      // const data: Product = {
      //   id: 1,
      //   name: result.product.name,
      //   amount: result.product.amount,
      //   reorderLevel: result.product.reorderLevel,
      //   costs: result.product.costs,
      //   img: 'https://www.freeiconspng.com/uploads/no-image-icon-15.png'
      // }
      // this.table.dataSource.data.push(data);
      // this.table.dataSource.connect(); // updaten
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

  closeSideBar(close) {
    if (close) {
      this.sideBarVisible = false;
    }
  }

  toggleSideBar() {
    this.sideBarVisible = !this.sideBarVisible;
    this.table.orderSideBarVisible = this.sideBarVisible;
  }
}