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
var book_component_1 = require('../book/book.component');
var book_service_1 = require('../book/book.service');
var BookShef = (function () {
    function BookShef(bkService) {
        this.bkService = bkService;
        console.log("BookShef");
        var arrBook = bkService.getAllBook();
        console.log(arrBook);
        this.books = arrBook;
    }
    BookShef = __decorate([
        core_1.Component({
            selector: 'book-shef',
            template: "\n        <div>\n            <div *ngFor='let bk of books'>\n                <book-info [bkobj]=\"bk\"></book-info>\n            </div>\n            <book-form></book-form>\n        </div>\n    ",
            directives: [book_component_1.BookInfo, book_component_1.BookForm],
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BookShef);
    return BookShef;
}());
exports.BookShef = BookShef;
//# sourceMappingURL=bookshef.component.js.map