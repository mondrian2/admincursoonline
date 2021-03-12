import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfierComponent } from './testfier.component';

describe('TestfierComponent', () => {
  let component: TestfierComponent;
  let fixture: ComponentFixture<TestfierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
