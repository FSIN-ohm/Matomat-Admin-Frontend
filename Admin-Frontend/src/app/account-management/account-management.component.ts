import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { AccountManagementSource } from '../account-management/account-management-source';
import { Account } from '../account-management/account';
import { DataTableComponent } from '../data-table/data-table.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})

export class AccountManagementComponent implements OnInit {
  @ViewChild(DataTableComponent) table;
  dataSource: AccountManagementSource;
  users: any;
  columnsToDisplay = ['name', 'balance', 'last_seen'];

  constructor(private injector: Injector, private service: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  editAccount(account) {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showEditModal(account);
    modalRef.content.onClose.subscribe(result => {
      this.updateData(result.account, result.id);
    });
  }

  updateData(newAccount, id) {
    this.service.editUser(newAccount).subscribe(res => {
      console.log(res);
    });
    // noch notwendig?
    for (let account of this.table.dataSource.data) {
      if (account.id === id) {
        account.name = newAccount.name;
        account.active = newAccount.active;
        account.credit = newAccount.credit;
        return;
      }
    }
  }

  createAccount() {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showCreationModal();
    modalRef.content.onClose.subscribe(result => {
      const data: Account = {
        id: 1,
        name: result.account.name,
        credit: result.account.credit,
        creationDate: '01.01.2000',
        lastActivity: 'heute',
        active: result.account.active,
      }
      this.service.addUser(data).subscribe(res => {
        console.log(res);
      });
      // this.table.dataSource.data.push(data);
      this.table.dataSource.connect(); // updaten
    });
  }

  deleteAccount(account) {
    if (confirm("Wollen Sie diesen Account endgültig löschen?")) {
      // const index = this.table.dataSource.data.indexOf(account);
      if (account.id > -1) {
        this.service.deleteUser(account.id).subscribe(res => {
          console.log(res);
        });
        // this.table.dataSource.data.splice(index, 1);
        this.table.dataSource.connect(); // updaten
      }
    }
  }
}