import {Injectable} from '@angular/core'
import {Book} from '../../cmpt/book/book.component'

@Injectable()
export class BookService {
    
    
    
    listBooks:Array<Book> = [
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
        ];
    
    constructor(){}
    
    public getAllBook():Array<Book>{
        return this.listBooks;
    }
    
    public getBook(index:number):Book{
        return this.listBooks[index];
    }
    
    public setBook(e:Book){
        this.listBooks.push(e);
    }
    
}