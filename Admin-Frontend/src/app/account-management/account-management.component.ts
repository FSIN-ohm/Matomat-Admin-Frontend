import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { MatPaginator, MatSort } from '@angular/material';
import { AccountManagementSource } from '../account-management/account-management-source';
import { Account } from '../account-management/account';
import { DeleteAccountModalComponent } from './delete-account-modal/delete-account-modal.component';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})

export class AccountManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AccountManagementSource;

  columnsToDisplay = ['userName', 'credit', 'creationDate', 'lastActivity', 'active', 'settings'];

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.dataSource = new AccountManagementSource(this.paginator, this.sort);
  }


  editAccount(account) {
    console.log("EDIT");
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showEditModal(account);
    modalRef.content.onClose.subscribe(result => {
      this.updateData(result.account, result.id);
    });
  }

  updateData(newAccount, id) {
    for (let account of this.dataSource.data) {
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
    console.log(modalRef.content);
    modalRef.content.onClose.subscribe(result => {
      const data: Account = {
        id: 1,
        name: result.account.name,
        credit: result.account.credit,
        creationDate: '01.01.2000',
        lastActivity: 'heute',
        active: result.account.active,
      }
      this.dataSource.data.push(data);
      console.log(this.dataSource);
      this.dataSource.connect(); // updaten
    });
  }

  deleteAccount(account) {
    const index = this.dataSource.data.indexOf(account);
    if (account.id > -1) {
      let deleteAccount;
      const modalService: BsModalService = this.injector.get(BsModalService);
      const modalRef = modalService.show(DeleteAccountModalComponent);
      (<DeleteAccountModalComponent>modalRef.content).show();
      console.log(modalRef.content);
      modalRef.content.onClose.subscribe(result => {
        console.log(result);
        deleteAccount = result;
        if (deleteAccount) {
          this.dataSource.data.splice(index, 1);
          this.dataSource.connect(); // updaten
        }
      });


    }
  }
}
