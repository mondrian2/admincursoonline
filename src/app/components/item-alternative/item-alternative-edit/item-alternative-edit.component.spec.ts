import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlternativeEditComponent } from './item-alternative-edit.component';

describe('ItemAlternativeEditComponent', () => {
  let component: ItemAlternativeEditComponent;
  let fixture: ComponentFixture<ItemAlternativeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAlternativeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAlternativeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
