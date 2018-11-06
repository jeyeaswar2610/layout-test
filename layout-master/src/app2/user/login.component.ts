import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from "./user.service"

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  public loginform: FormGroup;

  constructor(private _userService: UserService,private router:Router) {

  }

  doLogin(form: FormGroup) {
    if (this._userService.login(form.value.loginId, form.value.password)) {
      localStorage.setItem('auth', "true");
      this.router.navigate(['/home/demand']);
    }
    else {
      form.reset();
      alert("Invalid Username/Password");
    }
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    localStorage.removeItem('auth');
    this.loginform = new FormGroup({
      loginId: new FormControl(),
      password: new FormControl()
    });
  }
}
