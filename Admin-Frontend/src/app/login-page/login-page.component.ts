import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
 password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }
}