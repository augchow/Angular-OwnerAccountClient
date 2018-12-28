import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../_interfaces/account.model';

@Component({
  selector: 'app-owneraccounts',
  templateUrl: './owneraccounts.component.html',
  styleUrls: ['./owneraccounts.component.css']
})
export class OwneraccountsComponent implements OnInit {

  constructor() { }

  @Input() public accounts: Account[] = [];

  ngOnInit() {
  }

}
