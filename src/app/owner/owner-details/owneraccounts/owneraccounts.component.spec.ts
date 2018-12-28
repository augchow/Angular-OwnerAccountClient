import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwneraccountsComponent } from './owneraccounts.component';

describe('OwneraccountsComponent', () => {
  let component: OwneraccountsComponent;
  let fixture: ComponentFixture<OwneraccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwneraccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwneraccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
