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
var book_service_1 = require('./book.service');
var BookInfo = (function () {
    /*    public name:string;
        public author:string;
        public price:number;
        public noOfPage: number;*/
    function BookInfo() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Book)
    ], BookInfo.prototype, "bkobj", void 0);
    BookInfo = __decorate([
        core_1.Component({
            selector: 'book-info',
            template: "\n        <div>\n            <h3>{{ bkobj.name }}</h3>\n            <span> by {{ bkobj.author }} having {{ bkobj.naOfPage }} pages available for $ {{ bkobj.price }}  </span>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BookInfo);
    return BookInfo;
}());
exports.BookInfo = BookInfo;
var BookForm = (function () {
    function BookForm(bkService) {
        this.bkService = bkService;
        this.model = new Book("", "", 0, 0);
    }
    BookForm.prototype.addBook = function () {
        console.log("-> addBook");
        this.bkService.setBook(this.model);
        console.log("<- addBook");
    };
    BookForm = __decorate([
        core_1.Component({
            selector: 'book-form',
            template: "\n        <div>\n            <div class=\"form-group\">\n              <label for=\"name\">Book Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\"\n                     required\n                     [(ngModel)]=\"model.name\" name=\"name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"author\">Book Author</label>\n              <input type=\"text\" class=\"form-control\" id=\"author\"\n                     required\n                     [(ngModel)]=\"model.author\" name=\"author\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"noOfPage\">Book Pages</label>\n              <input type=\"text\" class=\"form-control\" id=\"noOfPage\"\n                     required\n                     [(ngModel)]=\"model.noOfPage\" name=\"noOfPage\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"price\">Book price</label>\n              <input type=\"text\" class=\"form-control\" id=\"price\"\n                     required\n                     [(ngModel)]=\"model.price\" name=\"price\">\n            </div>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"addBook()\">Add Book</button>\n        </div>\n    ",
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BookForm);
    return BookForm;
}());
exports.BookForm = BookForm;
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
//# sourceMappingURL=book.component.js.map