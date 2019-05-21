import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';
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
  users: any;
  admins: any;
  columnsToDisplay = ['name', 'balance', 'last_seen', 'admin'];

  constructor(private injector: Injector, private service: DataService) { }

  ngOnInit() {
    console.log(this.users);
    this.getUsers();
    this.getAdmins();
    this.checkForAdminRole();
  }

  checkForAdminRole() {
    setTimeout(() => {
      if (typeof(this.admins) === 'undefined' || typeof(this.users) === 'undefined') {
        this.checkForAdminRole();
        return;
      } else {
        console.log("fertig");
        console.log(this.users);
        for(let user of this.users) {
          console.log(user);
          for(let admin of this.admins) {
            console.log(admin);
            if(user.id === admin.id) {
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
    modalRef.content.onClose.subscribe(result => {
      this.updateData(result.account, result.id);
    });
  }

  updateData(newAccount, id) {
    this.service.editUser(newAccount, newAccount.id).subscribe(res => {
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
      this.service.addAdmin(data).subscribe(res => {
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