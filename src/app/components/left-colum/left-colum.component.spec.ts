import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumComponent } from './left-colum.component';

describe('LeftColumComponent', () => {
  let component: LeftColumComponent;
  let fixture: ComponentFixture<LeftColumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftColumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
