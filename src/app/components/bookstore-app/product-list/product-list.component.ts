import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './modal/Book';
import { ProductServerService } from './product-server.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'bookstore-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 livros$!: Observable<Book[]>;

  constructor(private bookService : ProductServerService) { }

  ngOnInit(): void {
    this.getLivros();
  }

  getLivros():void {
    this.livros$ = this.bookService.getBook()
      .pipe(
        //Serve para tratamento de erro
        catchError(error => {
          this.onError('Erro ao carregar cursos.')
          return of([]) //É preciso retornar um valor, então usamos o (of) do rjx e dentro representamos um array vazio.
        })
      )
  }

  onError(messageError: string) {
   alert(messageError);
  }

}
