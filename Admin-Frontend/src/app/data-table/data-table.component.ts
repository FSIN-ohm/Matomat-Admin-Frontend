import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AccountManagementSource } from '../account-management/account-management-source';
import { ProductsSource } from '../products/products-source';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() dataColumns: any[] = [];
  @Input() isProduct: boolean;
  @Input() dataSource;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() order = new EventEmitter();
  columnsToDisplay: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.columnsToDisplay = this.dataColumns.concat(['settings']);
    if (this.isProduct) {
      this.dataSource = new ProductsSource(this.paginator, this.sort);
    } else {
      this.dataSource = new AccountManagementSource(this.paginator, this.sort);
    }
  }

  editData(data) {
    this.edit.emit(data);
  }

  deleteData(data) {
    this.delete.emit(data);
  }

  addData() {
    this.add.emit();
  }

  orderStuff() {
    this.order.emit();
  }
}
