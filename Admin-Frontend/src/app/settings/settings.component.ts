import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.settingsForm = this.createFormGroup(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      email: formBuilder.group({
        old_email: ['', Validators.required],
        new_email: ['', Validators.required],
        new_email_confirm: ['', Validators.required]
      }),
      password: formBuilder.group({
        old_password: ['', Validators.required],
        new_password: ['', Validators.required],
        new_password_confirm: ['', Validators.required],
      })
    });
  }

  changePassword() {

  }

  changeMail() {
    
  }

}
