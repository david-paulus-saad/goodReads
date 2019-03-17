import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{AuthService} from "../services/auth.service";
import {BookService} from '../services/book.service'
import {  Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  err=''
  loginForm: FormGroup;
  registerForm: FormGroup;
  authors:any
  categories:any
  books:any
  constructor(private fb: FormBuilder,private authService:AuthService
    ,private router:Router,private bookService:BookService) { }

  ngOnInit() {
  this.bookService.getIndex().subscribe((doc)=>{
    this.categories=doc.categories;
    this.books=doc.books;
    this.authors=doc.authors;
  },err=>console.log(err))
    
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ]

    });
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ]

    });
    
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((doc)=>{
      if(doc.success){
        this.router.navigate(['/home']);

      }
    },err=>console.log(err));

  }
  regiser(){
    console.log(this.registerForm.value);
    this.authService.signUp(this.registerForm.value).subscribe((doc)=>{
      if(doc.success){
        console.log("registeration succuss , login ");
      }
    },err=>console.log(err))

  }


}
