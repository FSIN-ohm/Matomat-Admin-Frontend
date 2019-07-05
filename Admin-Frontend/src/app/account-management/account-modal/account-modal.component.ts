import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss']
})
export class AccountModalComponent implements OnInit {
  account: any;
  accountForm: FormGroup;
  addAdminModal: boolean = false;
  header: string;
  onClose: Subject<any>;

  constructor(public bsModal: BsModalRef, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.accountForm = this.createFormGroup(formBuilder);
    this.onClose = new Subject();
  }

  ngOnInit() {
    this.account = new Object();
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  createEditFormGroup(formBuilder:FormBuilder) {
    return formBuilder.group({
      user_name: ['', Validators.required],
    });
  }


  initWithData(account) {
    this.accountForm.patchValue({
      user_name: account.name,
    });
  }

  show() {
  }

  showEditModal(account) {
    this.header = 'Account bearbeiten';
    this.accountForm = this.createEditFormGroup(this.formBuilder);
    if (account != null) {
      this.account = account;
      this.initWithData(account);
    }

  }

  showCreationModal() {
    this.header = 'Admin erstellen';
    this.addAdminModal = true;
  }

  cancel() {
    this.bsModal.hide();
  }

  onSubmit() {
    if (this.accountForm.valid) {
      if (this.accountForm.value.password != null && this.accountForm.value.password.length < 8) {
        this.toastr.error('Das neue Passwort muss mindestens 8 Zeichen lang sein!', 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else {
        this.mapAccount(this.accountForm.value);
        this.onClose.next(this.account);
        this.bsModal.hide();
      }
    } else {
      this.findInvalidControls(this.accountForm);
      this.toastr.error('Bitte füllen Sie die fehlenden Felder aus!', 'Error', {
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

  mapAccount(accountForm) {
    this.account.user_name = accountForm.user_name;
    this.account.password = accountForm.password;
    this.account.email = accountForm.email;
    console.log(this.account);
  }
}
