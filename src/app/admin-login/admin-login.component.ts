import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  err=''
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ]
    });
  }
  onSubmit() {
    console.log("User: ", this.loginForm.value);
    this.authService.logIn( 
       {username:this.loginForm.value.username,
        password:this.loginForm.value.password})
      .subscribe(res => {
        if (res.success) {
         console.log(res)          
        }
        else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.err = error
      })
  }


}
