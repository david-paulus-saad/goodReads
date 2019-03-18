import { Component, OnInit } from '@angular/core';
import {book} from '../shared/book'
import {BookService} from '../services/book.service'
import {AuthService} from  '../services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 books:book[];
 err:string;
 username:string
  constructor(private bookService:BookService
    ,private authService:AuthService) { }

  ngOnInit() {
    this.authService.getUsername().subscribe((name)=>{
      this.username=name
    });
    this.getAll();
  }
  getAll(){
    this.bookService.getBooks().subscribe((books)=>{
      console.log(books)
      this.books=books;
    },err=>this.err=err)
  }
  getWant(){
    this.bookService.getWishlist().subscribe((books)=>{
      console.log(books)
      this.books=books;
    },err=>this.err=err)
  }
  getCurrent(){
    this.bookService.getCurrent().subscribe((books)=>{
      console.log(books)
      this.books=books;
    },err=>this.err=err)
  }
  getRead(){
    this.bookService.getRead().subscribe((books)=>{
      console.log(books)
      this.books=books;
    },err=>this.err=err)
  }


}
