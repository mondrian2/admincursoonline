import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeCreateComponent } from './alternative-create.component';

describe('AlternativeCreateComponent', () => {
  let component: AlternativeCreateComponent;
  let fixture: ComponentFixture<AlternativeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
