import { Component, OnInit } from '@angular/core';
import { TransactionSource } from './transactions-source';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  dataSource: TransactionSource;
  columnsToDisplay = ['name', 'amount', 'date', 'description'];

  constructor() { }

  ngOnInit() {
  }

}
