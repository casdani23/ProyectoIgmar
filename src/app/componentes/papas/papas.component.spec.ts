import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapasComponent } from './papas.component';

describe('PapasComponent', () => {
  let component: PapasComponent;
  let fixture: ComponentFixture<PapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
