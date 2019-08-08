import { Component, OnInit, Injector, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

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

  columnsToDisplay = [
    { key: 'thumbnail', value: 'Thumbnail' },
    { key: 'name', value: 'Name' },
    { key: 'price', value: 'Preis' },
    { key: 'reorder_point', value: 'Meldebestand' },
    { key: 'is_available', value: 'Verfügbarkeit' },
    { key: 'items_per_crate', value: 'Anzahl pro Kasten' }]

  constructor(private injector: Injector, private toastr: ToastrService, private dataService: DataService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  editProduct(product) {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(ProductModalComponent);
    (<ProductModalComponent>modalRef.content).showEditModal(product);
    modalRef.content.onClose.subscribe(newProduct => {
      this.dataService.editProduct(newProduct, product.id).subscribe(
        () => {
          this.toastr.success('Produkt wurde erfolgreich bearbeitet!', 'Erfolg', {
            positionClass: 'toast-top-right',
            timeOut: 6000
          });
          this.getProducts();
          error => { console.log(error); }
        })
    });
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
    modalRef.content.onClose.subscribe(product => {
      this.dataService.addProduct(product).subscribe(
        res => {
          this.toastr.success('Produkt wurde erfolgreich hinzugefügt!', 'Erfolg', {
            positionClass: 'toast-top-right',
            timeOut: 6000
          });
          this.getProducts();
        },
        error => { console.log(error); }
      );
    });
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