/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcquaintanceComponent } from './acquaintance.component';

describe('AcquaintanceComponent', () => {
  let component: AcquaintanceComponent;
  let fixture: ComponentFixture<AcquaintanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquaintanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
