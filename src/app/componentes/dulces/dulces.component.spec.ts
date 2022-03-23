import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcesComponent } from './dulces.component';

describe('DulcesComponent', () => {
  let component: DulcesComponent;
  let fixture: ComponentFixture<DulcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DulcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
