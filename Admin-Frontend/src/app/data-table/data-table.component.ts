import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AccountManagementSource } from '../account-management/account-management-source';
import { ProductsSource } from '../products/products-source';
import { TransactionSource } from '../transactions/transactions-source';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  @Input() dataColumns: any[] = [];
  @Input() enableOrder: boolean;
  @Input() dataSource: any;
  @Input() showImage: any;
  @Input() readonly: boolean;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() order = new EventEmitter();
  columnsToDisplay: any[] = [];
  orderSideBarVisible: boolean;
  test = true;
  constructor() {
  }

  ngOnInit() {
    // this.columnsToDisplay = this.columnsToDisplay.concat(['image']).concat(this.dataColumns.concat(['settings']));
    console.log(this.dataSource);
    console.log(this.dataColumns);
    // TODO: dynamische Data Source
    if (this.enableOrder) {
      // this.dataSource = new ProductsSource(this.paginator, this.sort);
      this.columnsToDisplay = this.columnsToDisplay.concat(['image']).concat(this.dataColumns.concat(['settings']));
    } else if (this.readonly) {
      // this.dataSource = new TransactionSource(this.paginator, this.sort);
      this.columnsToDisplay = this.dataColumns;
    } else {
      // this.dataSource = new AccountManagementSource(this.paginator, this.sort);
      this.columnsToDisplay = this.columnsToDisplay.concat(this.dataColumns.concat(['settings']));
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

  orderStuff(data) {
    this.order.emit(data);
  }
}
