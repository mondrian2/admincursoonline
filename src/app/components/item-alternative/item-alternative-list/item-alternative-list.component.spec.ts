import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlternativeListComponent } from './item-alternative-list.component';

describe('ItemAlternativeListComponent', () => {
  let component: ItemAlternativeListComponent;
  let fixture: ComponentFixture<ItemAlternativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAlternativeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAlternativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
