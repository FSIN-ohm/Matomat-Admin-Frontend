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
  creationModal: boolean = false;
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
      account: formBuilder.group({
        name: ['', Validators.required],
        credit: [''],
        active: ['']
      })
    });
  }

  show() {
  }

  showEditModal(account) {
    this.header = "Edit Account";
    if (account != null) {
      this.account = account;
    }
  }

  showCreationModal() {
    this.header = "Create Account";
    this.creationModal = true;
  }

  onCancel() {
    this.bsModal.hide();
  }

  onSubmit() {
    if (this.accountForm.valid) {
      console.log("Valid");
      if (this.creationModal) {
        // add account
        this.toastr.success('Success', 'added account successfully!', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
      } else {
        // edit account
        this.toastr.success('Success', 'edited account successfully!', {
          positionClass: 'toast-top-right',
          timeOut: 6000
        });
        this.accountForm.value.id = this.account.id;
      }
      this.onClose.next(this.accountForm.value);
      this.bsModal.hide();
    } else {
      this.findInvalidControls(this.accountForm);
      this.toastr.error('Error', 'please fill in missing fields!', {
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
