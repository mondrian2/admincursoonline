import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompleteCreateComponent } from './item-complete-create.component';

describe('ItemCompleteCreateComponent', () => {
  let component: ItemCompleteCreateComponent;
  let fixture: ComponentFixture<ItemCompleteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCompleteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompleteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
