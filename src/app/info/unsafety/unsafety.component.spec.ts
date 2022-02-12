import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsafetyComponent } from './unsafety.component';

describe('UnsafetyComponent', () => {
  let component: UnsafetyComponent;
  let fixture: ComponentFixture<UnsafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
