import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: any;

  columnsToDisplay = [{ key: 'date', value: 'Datum' },
  { key: 'sender', value: 'Sender' },
  { key: 'receiver', value: 'Empfänger' },
  { key: 'amount', value: 'Anzahl' },
  { key: 'transaction_type', value: 'Transaktionstyp' }];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.dataService.getTransactions().subscribe(res => {
      console.log(res);
      this.transactions = res;
      this.convertCentToEuro();
    });
  }

  convertCentToEuro() {
    for(let transaction of this.transactions) {
      transaction.amount = transaction.amount/100 + '€'; 
    }
  }

}
