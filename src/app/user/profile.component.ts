import { style } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
  em{ float:right; color:#E05C65; padding-left: 10px;}
  .error input {background-color:#E3C3CE;}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error ::ms-input-placeholder { color: #999; }
  `]
})

export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private auth:AuthService, private router:Router){
  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateUser(formValues.firstName, formValues.lastName)
      this.router.navigate(["events/"])
    }
  }

  validateFirstName() {
    console.log(this.firstName.valid);
    console.log(this.firstName.untouched);
     return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
 }

  cancel() {
    this.router.navigate(["events/"])
  }

}
