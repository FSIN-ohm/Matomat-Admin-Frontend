import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  // TODO: Input id, name, costs, amountGewünscht
  products: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  addProduct(product) {
    let data = {
      id: product.id,
      name: product.name,
      costs: product.costs,
      count: product.amount // TODO: nicht amount, sondern count als Output von Modal
    }
    this.products.push(data);
    console.log(this.products);
  }

}
