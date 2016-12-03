import { Component, Input } from '@angular/core';
import { BookService } from './book.service'
@Component({
    selector : 'book-info',
    template : `
        <div>
            <h3>{{ bkobj.name }}</h3>
            <span> by {{ bkobj.author }} having {{ bkobj.naOfPage }} pages available for $ {{ bkobj.price }}  </span>
        </div>
    `
})
export class BookInfo {
    
    
    @Input() bkobj:Book;
    
/*    public name:string;
    public author:string;
    public price:number;
    public noOfPage: number;*/
    
    constructor(){}
    
}

@Component({
    selector : 'book-form',
    template : `
        <div>
            <div class="form-group">
              <label for="name">Book Name</label>
              <input type="text" class="form-control" id="name"
                     required
                     [(ngModel)]="model.name" name="name">
            </div>
            <div class="form-group">
              <label for="author">Book Author</label>
              <input type="text" class="form-control" id="author"
                     required
                     [(ngModel)]="model.author" name="author">
            </div>
            <div class="form-group">
              <label for="noOfPage">Book Pages</label>
              <input type="text" class="form-control" id="noOfPage"
                     required
                     [(ngModel)]="model.noOfPage" name="noOfPage">
            </div>
            <div class="form-group">
              <label for="price">Book price</label>
              <input type="text" class="form-control" id="price"
                     required
                     [(ngModel)]="model.price" name="price">
            </div>
            <button type="button" class="btn btn-default" (click)="addBook()">Add Book</button>
        </div>
    `,
    providers: [BookService]
})
export class BookForm {
    
    model:Book = new  Book("", "", 0, 0);
    
    constructor(private bkService:BookService){}
    
    addBook(){
        console.log("-> addBook");
        this.bkService.setBook(this.model);
        console.log("<- addBook");
    }
    
}

export class Book{
    constructor(private name:string, private author:string, private price:number, private noOfPage:number){}
}