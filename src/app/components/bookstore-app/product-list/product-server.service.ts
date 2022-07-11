import { Book } from './modal/Book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {delay, first,  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServerService {

  private readonly baseUrl = 'http://localhost:3000/products';

  httpOptions = {
    Headers : new Headers({'content-type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  getBook(){
    return this.http.get<Book[]>(this.baseUrl)
    .pipe(
      first(),
      delay(5000) //Essa prte serve apenas para atrasar o carregamento para mostrar o spinner, pode tirar .
     // tap(books => console.log(books))
    )
  }
}
