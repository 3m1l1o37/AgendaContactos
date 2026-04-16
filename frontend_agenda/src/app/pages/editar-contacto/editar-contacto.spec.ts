import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContacto } from './editar-contacto';

describe('EditarContacto', () => {
  let component: EditarContacto;
  let fixture: ComponentFixture<EditarContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarContacto],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarContacto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
