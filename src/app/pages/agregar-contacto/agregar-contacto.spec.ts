import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContacto } from './agregar-contacto';

describe('AgregarContacto', () => {
  let component: AgregarContacto;
  let fixture: ComponentFixture<AgregarContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
