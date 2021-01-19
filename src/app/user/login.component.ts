import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
