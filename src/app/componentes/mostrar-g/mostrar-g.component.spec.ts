import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGComponent } from './mostrar-g.component';

describe('MostrarGComponent', () => {
  let component: MostrarGComponent;
  let fixture: ComponentFixture<MostrarGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
