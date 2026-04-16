import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactosService } from '../../services/contactos';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-contacto.html',
  styleUrl: './agregar-contacto.css'
})
export class AgregarContacto {

  servicio = inject(ContactosService);
  router = inject(Router);

  contacto = {
    nombre: '',
    telefono: '',
    email: ''
  };

  guardar() {
    if (!this.contacto.nombre || !this.contacto.telefono || !this.contacto.email) {
      alert('Todos los campos son obligatorios');
      return;
    }

    //  POST al backend
    this.servicio.agregar(this.contacto);

    alert('Contacto agregado');

    //  regresar a lista
    this.router.navigate(['/contactos']);
  }
}