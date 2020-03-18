import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Product {
  item: string;
  price: number;
  ammount: number;
  subtotal: number;
}

const itemList: Product[] = [
  { item: 'prod 1', price: 123, ammount: 45, subtotal: 0 },
  { item: 'prod 2', price: 5, ammount: 4536, subtotal: 0 },
  { item: 'prod 3', price: 55, ammount: 4586, subtotal: 0 },
  { item: 'prod 4', price: 3, ammount: 2, subtotal: 0 },
  { item: 'prod 5', price: 7, ammount: 3, subtotal: 0 },
  { item: 'prod 6', price: 88, ammount: 787, subtotal: 0 }
];

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  displayedColumns: string[] = ['item', 'price', 'ammount', 'subtotal'];
  dataSource = new MatTableDataSource(itemList);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
