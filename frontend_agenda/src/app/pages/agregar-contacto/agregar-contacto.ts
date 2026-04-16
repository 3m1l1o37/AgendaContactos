import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactosService } from '../../services/contactos';
import Swal from 'sweetalert2';

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

      Swal.fire({
        title: 'Campos incompletos',
        text: 'Todos los campos son obligatorios',
        icon: 'warning'
      });

      return;
    }

    // POST al backend
    this.servicio.agregar(this.contacto);

    // Éxito
    Swal.fire({
      title: '¡Guardado!',
      text: 'El contacto fue agregado correctamente',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    });

    // Redirigir después de un pequeño delay
    setTimeout(() => {
      this.router.navigate(['/contactos']);
    }, 1500);
  }
}