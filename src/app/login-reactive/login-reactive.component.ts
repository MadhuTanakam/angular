import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  myForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    message: new FormControl(''),
  });

  

 

  constructor() { }

  ngOnInit(): void {
  
  }
onSubmit()
{
  alert(this.myForm.get('email').value);
}
}
