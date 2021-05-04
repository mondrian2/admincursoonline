import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeListComponent } from './alternative-list.component';

describe('AlternativeListComponent', () => {
  let component: AlternativeListComponent;
  let fixture: ComponentFixture<AlternativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
