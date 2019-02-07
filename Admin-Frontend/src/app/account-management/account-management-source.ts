import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, Subject } from 'rxjs';
import { Account } from '../account-management/account';

/* TODO: Get data from HTTP Request */
const ACCOUNTS: Account[] = [
  { id: 1, name: 'PersonA', credit: 3, creationDate: '21.11.2018', lastActivity: '23.11.2018', active: true },
  { id: 2, name: 'PersonB', credit: 5, creationDate: '15.11.2018', lastActivity: '20.11.2018', active: true },
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AccountManagementSource extends DataSource<Account> {
  data: Account[] = ACCOUNTS;
  recordChange$ = new Subject();

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Account[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.

    // update data in table (not the best solution...)
    this.paginator._changePageSize(this.paginator.pageSize); 


    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Account[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Account[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    /* TODO: add sorting field dynamically */
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'credit': return compare(+a.credit, +b.credit, isAsc);
        case 'creationDate': return compare(a.creationDate, b.creationDate, isAsc);
        case 'lastActivity': return compare(a.lastActivity, b.lastActivity, isAsc);
        case 'active': return compare(a.active, b.active, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
