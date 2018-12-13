import { Component, OnInit, Injector } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { MatTableDataSource } from '@angular/material';


export interface Account {
  id: number;
  name: string;
  credit: number;
  creationDate: string;
  lastActivity: string;
  active: boolean;
}

const ACCOUNTS: Account[] = [
  { id: 1, name: 'PersonA', credit: 3, creationDate: '21.11.2018', lastActivity: '23.11.2018', active: true },
  { id: 2, name: 'PersonB', credit: 5, creationDate: '15.11.2018', lastActivity: '20.11.2018', active: true },
];

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {
  dataSource = new MatTableDataSource<Account>(ACCOUNTS);
  columnsToDisplay = ['userName', 'credit', 'creationDate', 'lastActivity', 'active', 'edit', 'delete'];

  constructor(private injector: Injector) { }

  ngOnInit() {
    console.log("ACCOUNT");
  }

  editAccount(account) {
    console.log("EDIT");
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showEditModal(account);
    modalRef.content.onClose.subscribe(result => {
      this.updateData(result.account, result.id);
      // this.dataSource._updateChangeSubscription(); // gar nicht notwendig??
    });
  }

  updateData(newAccount, id) {
    // ACCOUNTS updaten
    for (let account of ACCOUNTS) {
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
      ACCOUNTS.push(data);
      this.dataSource._updateChangeSubscription();
    });
  }

  deleteAccount(account) {
    const index = ACCOUNTS.indexOf(account);
    if (account.id > -1) {
      ACCOUNTS.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }
}
