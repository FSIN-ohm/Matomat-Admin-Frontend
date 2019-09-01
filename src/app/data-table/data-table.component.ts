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
  @Input() enableAddButton: boolean;
  @Input() enableDeleteButton: boolean;
  @Input() dataSource: any;
  @Input() readonly: boolean;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() order = new EventEmitter();
  columnsToDisplay: any[] = [];
  columnsHeader: any[] = [];
  dataColumnsKeyValue;
  orderSideBarVisible: boolean;
  constructor() {
  }

  ngOnInit() {
    this.dataColumnsKeyValue = this.dataColumns;
    console.log(this.dataColumns);
    // this.columnsHeader = this.extractValue(this.dataColumns);
    this.dataColumns = this.extractKey(this.dataColumnsKeyValue);
    if (!this.readonly) {
      this.columnsToDisplay = this.columnsToDisplay.concat(this.dataColumns.concat(['settings']));
    } else {
      this.columnsToDisplay = this.dataColumns;
    }
  }

  extractKey(dataColumns): any {
    let newDataColumns = [];
    for(let i=0; i< dataColumns.length; i++) {
      newDataColumns.push(dataColumns[i].key);
    }
    return newDataColumns;
  }

  changeHeader(data) {
    return this.findValueForKey(data, this.dataColumnsKeyValue);
  }

  findValueForKey(key: string, dataKeyValue): string {
    for(let i=0; i<dataKeyValue.length; i++) {
      if(key === dataKeyValue[i].key) {
        return dataKeyValue[i].value;
      }
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