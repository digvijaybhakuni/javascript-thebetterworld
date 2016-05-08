import { Component } from '@angular/core';

@Component({
    selector : 'book-shef',
    template : `
        <div *ngFor='let book of books'>
            <h4>{{book.name}}</h4>
            <strong>Author</strong> : <span>{{book.author}}</span> <strong>$ {{book.price}}</strong>
            <br> No Of Pages in book is {{book.noOfPage}}
        </div>
    `
})
export class BookShef{
    
    books : Book[] = [
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
        }
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
}

export class Book {
    constructor(public name:string, public author:string, public price:number, public noOfPage: number){}
}