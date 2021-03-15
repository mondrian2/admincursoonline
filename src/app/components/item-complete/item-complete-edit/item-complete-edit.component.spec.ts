import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompleteEditComponent } from './item-complete-edit.component';

describe('ItemCompleteEditComponent', () => {
  let component: ItemCompleteEditComponent;
  let fixture: ComponentFixture<ItemCompleteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCompleteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompleteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
