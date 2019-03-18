import { Component, OnInit ,Inject} from '@angular/core';
import {book} from '../shared/book';
import  {BookService} from '../services/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:book[]
  err:string
  constructor(private bookService:BookService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books)=>{
     this.books=books;
    },err=>this.err=err)
  }

}
