import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeEditComponent } from './alternative-edit.component';

describe('AlternativeEditComponent', () => {
  let component: AlternativeEditComponent;
  let fixture: ComponentFixture<AlternativeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
