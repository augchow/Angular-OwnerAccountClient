import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { RouterModule } from '@angular/router';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { SharedModule } from '../shared/shared.module';
import { OwneraccountsComponent } from './owner-details/owneraccounts/owneraccounts.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent,
    OwneraccountsComponent,
    OwnerCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent },
      { path: 'details/:id', component: OwnerDetailsComponent },
      { path: 'create', component: OwnerCreateComponent}
    ]),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
