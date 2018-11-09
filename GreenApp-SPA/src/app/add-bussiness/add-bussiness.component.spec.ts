import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBussinessComponent } from './add-bussiness.component';

describe('AddBussinessComponent', () => {
  let component: AddBussinessComponent;
  let fixture: ComponentFixture<AddBussinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBussinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
