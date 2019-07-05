import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  admin: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private authService: AuthService, private dataService: DataService) {
    this.settingsForm = this.createFormGroup(formBuilder);
  }

  ngOnInit() {
    this.getAdminData();
  }

  getAdminData() {
    return this.dataService.getLoggedInAdmin().subscribe(
      res => {
        this.admin = res;
      }
    );
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      email: formBuilder.group({
        password: ['', Validators.required],
        new_email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
        new_email_confirm: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      }),
      password: formBuilder.group({
        old_password: ['', Validators.required],
        new_password: ['', Validators.required],
        new_password_confirm: ['', Validators.required],
      })
    });
  }

  get PasswordForm() {
    return this.settingsForm.controls.password as FormGroup;
  }

  get MailForm() {
    return this.settingsForm.controls.email as FormGroup;
  }

  changePassword() {
    if (this.PasswordForm.valid) {
      if (this.PasswordForm.value.old_password !== this.authService.password) {
        this.PasswordForm.controls.old_password.patchValue("");
        this.PasswordForm.controls.old_password.markAsTouched;
        this.toastr.error('Das angegebene Passwort ist nicht richtig!', 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else if (this.PasswordForm.value.new_password !== this.PasswordForm.value.new_password_confirm) {
        this.PasswordForm.controls.new_password_confirm.patchValue("");
        this.PasswordForm.controls.new_password_confirm.markAsTouched;
        this.toastr.error('Die Passwörter stimmen nicht überein!', 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else if (this.PasswordForm.value.new_password.length < 8) {
        this.toastr.error('Das neue Passwort muss mindestens 8 Zeichen lang sein!', 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else {
        console.log(this.admin);
        let newAdmin = {
          email: this.admin.email,
          user_name: this.admin.user_name,
          password: this.PasswordForm.value.new_password
        }
        this.dataService.editAdmin(newAdmin, this.admin.id).subscribe(res => {
          console.log(res);
          this.toastr.success('Das Passwort wurde erfolgreich geändert!', 'Error', {
            positionClass: 'toast-top-right',
            timeOut: 6000
          });
        });
      }
    } else {
      this.findInvalidControls(this.PasswordForm);
      this.toastr.error('Bitte befülle die erforderlichen Felder!', 'Error', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
    }
  }

  changeMail() {
    console.log(this.admin);
    if (this.MailForm.valid) {
      if (this.MailForm.value.password !== this.authService.password) {
        this.MailForm.controls.password.patchValue("");
        this.MailForm.controls.password.markAsTouched;
        this.toastr.error('Das angegebene Passwort ist nicht richtig!', 'Erfolg', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else if (this.MailForm.value.new_email !== this.MailForm.value.new_email_confirm) {
        this.MailForm.controls.new_email_confirm.patchValue("");
        this.MailForm.controls.new_email_confirm.markAsTouched();
        this.toastr.error('Die E-Mails stimmen nicht überein!', 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else {
        console.log(this.admin);
        let newAdmin = {
          email: this.MailForm.value.new_email,
          user_name: this.admin.user_name,
          password: this.authService.password
        }
        this.dataService.editAdmin(newAdmin, this.admin.id).subscribe(res => {
          console.log(res);
          this.toastr.success('Die E-Mail wurde erfolgreich geändert!', 'Erfolg', {
            positionClass: 'toast-top-right',
            timeOut: 6000
          });
        });
      }
    } else {
      this.findInvalidControls(this.MailForm);
      this.toastr.error('Bitte befülle die erforderlichen Felder!', 'Error', {
        positionClass: 'toast-top-right',
        timeOut: 6000
      });
    }
  }

  findInvalidControls(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.findInvalidControls(control);
      }
    })
  }
}
