import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisosComponent } from './guisos.component';

describe('GuisosComponent', () => {
  let component: GuisosComponent;
  let fixture: ComponentFixture<GuisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
