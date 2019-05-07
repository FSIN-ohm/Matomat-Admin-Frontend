import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: any;
  columnsToDisplay = ['date', 'sender', 'receiver', 'amount', 'transaction_type'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.dataService.getTransactions().subscribe(res => {
      console.log(res);
      this.transactions = res;
    });
  }

}
