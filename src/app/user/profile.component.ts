import { Component, OnInit } from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  
  profileForm: FormGroup

  constructor(private auth:AuthService, private router:Router){
  }

  ngOnInit() {
    let firstName = new FormControl(this.auth.currentUser.firstName)
    let lasttName = new FormControl(this.auth.currentUser.lastName)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lasttName
    })
  }

  saveProfile(formValues) {
    this.auth.updateUser(formValues.firstName, formValues.lastName)
    this.router.navigate(["events/"])
  }

  cancel() {
    this.router.navigate(["events/"])
  }

}