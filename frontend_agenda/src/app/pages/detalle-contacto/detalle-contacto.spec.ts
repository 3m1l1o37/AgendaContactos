import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleContacto } from './detalle-contacto';

describe('DetalleContacto', () => {
  let component: DetalleContacto;
  let fixture: ComponentFixture<DetalleContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
