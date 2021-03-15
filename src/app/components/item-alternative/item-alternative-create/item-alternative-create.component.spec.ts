import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlternativeCreateComponent } from './item-alternative-create.component';

describe('ItemAlternativeCreateComponent', () => {
  let component: ItemAlternativeCreateComponent;
  let fixture: ComponentFixture<ItemAlternativeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAlternativeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAlternativeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
