import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../services/contactos';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-contacto.html',
  styleUrl: './agregar-contacto.css'
})
export class AgregarContacto {

  servicio = inject(ContactosService);

  contacto = {
    id: 0,
    nombre: '',
    telefono: '',
    email: ''
  };

  guardar() {
    if (!this.contacto.nombre || !this.contacto.telefono || !this.contacto.email) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.contacto.id = Date.now();

    this.servicio.contactos.update(lista => [...lista, this.contacto]);

    alert('Contacto agregado');

    this.contacto = { id: 0, nombre: '', telefono: '', email: '' };
  }
}