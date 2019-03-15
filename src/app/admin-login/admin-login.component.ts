import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  err=''
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      confirm: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ]

    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
