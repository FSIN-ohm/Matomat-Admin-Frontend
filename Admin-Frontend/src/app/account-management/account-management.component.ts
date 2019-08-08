import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { Account } from '../account-management/account';
import { DataTableComponent } from '../data-table/data-table.component';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})

export class AccountManagementComponent implements OnInit {
  @ViewChild(DataTableComponent) table;
  users: any;
  admins: any;
  columnsToDisplay = [
    { key: 'name', value: 'Name' },
    { key: 'balance', value: 'Bilanz' },
    { key: 'last_seen', value: 'Zuletzt gesehen' },
    { key: 'admin', value: 'Ist Admin' }];

  constructor(private injector: Injector, private service: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAdminsAndUsers();
  }

  getAdminsAndUsers() {
    this.getUsers();
    this.getAdmins();
    this.checkForAdminRole();
  }

  checkForAdminRole() {
    setTimeout(() => {
      if (typeof (this.admins) === 'undefined' || typeof (this.users) === 'undefined') {
        this.checkForAdminRole();
        return;
      } else {
        for (let user of this.users) {
          for (let admin of this.admins) {
            if (user.id === admin.id) {
              user.admin = true;
            }
          }
        }
      }
    }, 200);
  }

  getUsers() {
    this.service.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  getAdmins() {
    this.service.getAdmins().subscribe(admins => {
      this.admins = admins;
      console.log(this.admins);
    })
  }

  editAccount(account) {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showEditModal(account);
    modalRef.content.onClose.subscribe(updatedAccount => {
      this.service.editAdmin(updatedAccount, account.id).subscribe(
        () => {
          this.toastr.success('Account wurde erfolgreich bearbeitet!', 'Erfolg', {
            positionClass: 'toast-top-right',
            timeOut: 6000
          });
          this.getAdminsAndUsers();
        },
        error => { console.log(error); }
      );
    });
  }

  createAccount() {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showCreationModal();
    modalRef.content.onClose.subscribe(account => {
      this.service.addAdmin(account).subscribe(
        res => {
          this.toastr.success('Account wurde erfolgreich erstellt!', 'Erfolg', {
            positionClass: 'toast-top-right',
            timeOut: 6000
          });
          this.getAdminsAndUsers();
        },
        error => { console.log(error); }
      );
    });
  }

  deleteAccount(account) {
    if (confirm("Wollen Sie diesen Account endgültig löschen?")) {
      if (account.id > -1) {
        this.service.deleteUser(account.id).subscribe(res => {
          this.getAdminsAndUsers();
        });
      }
    }
  }
}