import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { RouterModule } from '@angular/router';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { SharedModule } from '../shared/shared.module';
import { OwneraccountsComponent } from './owner-details/owneraccounts/owneraccounts.component';

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwneraccountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent },
      { path: 'details/:id', component: OwnerDetailsComponent }
    ]),
    SharedModule
  ]
})
export class OwnerModule { }
