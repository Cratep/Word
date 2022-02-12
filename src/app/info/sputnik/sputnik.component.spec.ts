import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SputnikComponent } from './sputnik.component';

describe('SputnikComponent', () => {
  let component: SputnikComponent;
  let fixture: ComponentFixture<SputnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SputnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SputnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
