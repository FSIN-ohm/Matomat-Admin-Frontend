import { Component, OnInit, Injector } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';


export interface Account {
  id: number;
  name: string;
  credit: number;
  creationDate: string;
  lastActivity: string;
  active: boolean;
}

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {
  accounts: Account[] = [
    { id: 1, name: 'PersonA', credit: 3, creationDate: '21.11.2018', lastActivity: '23.11.2018', active: true },
    { id: 2, name: 'PersonB', credit: 5, creationDate: '15.11.2018', lastActivity: '20.11.2018', active: true },
  ];

  constructor(private injector: Injector) { }

  ngOnInit() {
  }

  editAccount(account) {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showEditModal(account);
    // modalRef.content.onClose.subscribe(result => {
    //   console.log(result);
    // });
  }

  createAccount() {
    const modalService: BsModalService = this.injector.get(BsModalService);
    const modalRef = modalService.show(AccountModalComponent);
    (<AccountModalComponent>modalRef.content).showCreationModal();
    modalRef.content.onClose.subscribe(result => {
      console.log(result);
      const data: Account = {
        id: 1,
        name: result.account.name,
        credit: result.account.credit,
        creationDate: '01.01.2000',
        lastActivity: 'heute',
        active: result.account.active,
      }
      this.accounts.push(data);
    });
  }

  deleteAccount(account) {
    this.accounts = this.accounts.filter(item => item !== account);
  }
}
