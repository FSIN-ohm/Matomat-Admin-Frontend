import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductsSource } from '../products-source';

@Component({
  selector: 'app-select-products-modal',
  templateUrl: './select-products-modal.component.html',
  styleUrls: ['./select-products-modal.component.scss']
})
export class SelectProductsModalComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProductsSource;
  onClose: Subject<any>;

  columnsToDisplay = ['productName', 'amount', 'reorderLevel', 'costs'];

  constructor(public bsModal: BsModalRef) {
    this.onClose = new Subject();
  }

  ngOnInit() {
    this.dataSource = new ProductsSource(this.paginator, this.sort);
  }

  show() {

  }

  onCancel() {
    this.bsModal.hide();
  }

}
