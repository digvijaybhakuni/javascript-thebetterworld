import { Component } from '@angular/core';
import { BookShef } from './cmpt/bookshef/bookshef.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <hr>
    <h2>{{ title }}</h2>
    <book-shef></book-shef>
  `,
  directives : [BookShef]
})
export class AppComponent {
  
  title = "Dummy Title"
  
}