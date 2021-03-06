import { Component } from '@angular/core';
import { BookInfo, BookForm, Book } from '../book/book.component'
import { BookService } from '../book/book.service'
@Component({
    selector : 'book-shef',
    template : `
        <div>
            <div *ngFor='let bk of books'>
                <book-info [bkobj]="bk"></book-info>
            </div>
            <book-form></book-form>
        </div>
    `,
    directives : [BookInfo, BookForm],
    providers: [BookService]
})
export class BookShef {
    
    
     books:Array<Book>;
    
    constructor(private bkService:BookService){
        console.log("BookShef");
        let arrBook = bkService.getAllBook();
        console.log(arrBook);
        this.books = arrBook;
    }
    
    /*[
        {
            name : 'book1',
            author : 'author1',
            price : 23,
            noOfPage : 43 
        },
        {
            name : 'book2',
            author : 'author2',
            price : 453,
            noOfPage : 54 
        },
        {
            name : 'book3',
            author : 'author3',
            price : 23,
            noOfPage : 43 
        }
<<<<<<< HEAD
        ];
   
    
    constructor(){
        console.log("BookShef");
        this.books.push({
        name : 'book1',
        author : 'author1',
        price : 23,
        noOfPage : 43 
    });
        
    }
    
    getString() : string {
     return "";   
    }
}

export class Book {
    constructor(public name:string, public author:string, public price:number, public noOfPage: number){}
=======
        ];*/
    
>>>>>>> 9bf0ac1c5e3c36f6a193c840878fa1ebe594879e
}