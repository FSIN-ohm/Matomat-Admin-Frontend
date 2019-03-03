import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });

    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    if(this.authenticationService.login(this.loginForm.value)){
      if(this.loginForm.valid) {
          this.toastr.success('Du bist erfolgreich eingeloggt.', 'Erfolg!', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
        this.router.navigate(["product-management"]);
        return;
      }
    } 
    if(this.loginForm.invalid){
    this.toastr.error('Der Benutzername und das Passwort stimmen nicht überein.', 'Error!', {
      positionClass: 'toast-top-right',
      timeOut: 6000
    });
    return;
    }
  }
}
