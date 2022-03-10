import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPComponent } from './mostrar-p.component';

describe('MostrarPComponent', () => {
  let component: MostrarPComponent;
  let fixture: ComponentFixture<MostrarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
