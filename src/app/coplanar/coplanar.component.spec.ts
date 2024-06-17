import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoplanarComponent } from './coplanar.component';

describe('CoplanarComponent', () => {
  let component: CoplanarComponent;
  let fixture: ComponentFixture<CoplanarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoplanarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoplanarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
