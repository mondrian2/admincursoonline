import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompleteListComponent } from './item-complete-list.component';

describe('ItemCompleteListComponent', () => {
  let component: ItemCompleteListComponent;
  let fixture: ComponentFixture<ItemCompleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCompleteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
