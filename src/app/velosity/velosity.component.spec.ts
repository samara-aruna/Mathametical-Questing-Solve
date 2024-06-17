import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelosityComponent } from './velosity.component';

describe('VelosityComponent', () => {
  let component: VelosityComponent;
  let fixture: ComponentFixture<VelosityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VelosityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
