import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteEditComponent } from './complete-edit.component';

describe('CompleteEditComponent', () => {
  let component: CompleteEditComponent;
  let fixture: ComponentFixture<CompleteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
