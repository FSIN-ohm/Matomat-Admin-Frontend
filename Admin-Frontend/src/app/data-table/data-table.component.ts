import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

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
  // @Input() showImage: any;
  @Input() readonly: boolean;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() order = new EventEmitter();
  columnsToDisplay: any[] = [];
  
  constructor() {
  }

  ngOnInit() {
    if (!this.readonly) {
      // this.dataSource = new ProductsSource(this.paginator, this.sort);
      this.columnsToDisplay = this.columnsToDisplay.concat(this.dataColumns.concat(['settings']));
    } else {
      this.columnsToDisplay = this.dataColumns;
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
