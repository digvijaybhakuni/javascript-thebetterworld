"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BookShef = (function () {
    function BookShef() {
        this.books = [
            {
                name: 'book1',
                author: 'author1',
                price: 23,
                noOfPage: 43
            },
            {
                name: 'book2',
                author: 'author2',
                price: 453,
                noOfPage: 54
            }
        ];
        console.log("BookShef");
        this.books.push({
            name: 'book1',
            author: 'author1',
            price: 23,
            noOfPage: 43
        });
    }
    BookShef = __decorate([
        core_1.Component({
            selector: 'book-shef',
            template: "\n        <div *ngFor='let book of books'>\n            <h4>{{book.name}}</h4>\n            <strong>Author</strong> : <span>{{book.author}}</span> <strong>$ {{book.price}}</strong>\n            <br> No Of Pages in book is {{book.noOfPage}}\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BookShef);
    return BookShef;
}());
exports.BookShef = BookShef;
var Book = (function () {
    function Book(name, author, price, noOfPage) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.noOfPage = noOfPage;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=bookshef.component.js.map