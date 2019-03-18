import { Component, OnInit ,Inject} from '@angular/core';
import {author} from '../shared/author'
import {AuthorService} from '../services/author.service'
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:author[]
  err:string
  constructor(private authorService:AuthorService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  this.authorService.getAuthors().subscribe((authors)=>{
    this.authors=authors
  },err=>this.err=err);
  }

}
