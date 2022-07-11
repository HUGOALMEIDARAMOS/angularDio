import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../modal/Book';

@Component({
  selector: 'bookstore-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() book!:Book

  active:boolean = true;

  constructor() { }

  ngOnInit(): void {}

}