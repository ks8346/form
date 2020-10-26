import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHalfComponent } from './first-half.component';

describe('FirstHalfComponent', () => {
  let component: FirstHalfComponent;
  let fixture: ComponentFixture<FirstHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
