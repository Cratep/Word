import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmosPollutionComponent } from './cosmos-pollution.component';

describe('CosmosPollutionComponent', () => {
  let component: CosmosPollutionComponent;
  let fixture: ComponentFixture<CosmosPollutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmosPollutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmosPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
