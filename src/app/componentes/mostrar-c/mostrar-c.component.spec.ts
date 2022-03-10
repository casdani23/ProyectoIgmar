import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCComponent } from './mostrar-c.component';

describe('MostrarCComponent', () => {
  let component: MostrarCComponent;
  let fixture: ComponentFixture<MostrarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
