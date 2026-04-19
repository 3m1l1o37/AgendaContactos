import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactosService } from '../../services/contactos';
import Swal from 'sweetalert2';
import { PaisService } from '../../services/pais.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-contacto.html',
  styleUrl: './agregar-contacto.css'
})
export class AgregarContacto implements OnInit {

  servicio = inject(ContactosService);
  router = inject(Router);
  paisService = inject(PaisService);
  paises: any[] = [];

  contacto = {
    nombre: '',
    telefono: '',
    email: '',
    pais: ''
  };

  guardar() {
    if (!this.contacto.nombre || !this.contacto.telefono ||
        !this.contacto.email || !this.contacto.pais) {
      Swal.fire({
        title: 'Campos incompletos',
        text: 'Todos los campos son obligatorios',
        icon: 'warning'
      });
      return;
    }

    this.servicio.agregar(this.contacto).subscribe({
      next: () => {
        this.servicio.cargarContactos();
        Swal.fire({
          title: '¡Guardado!',
          text: 'El contacto fue agregado correctamente',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        setTimeout(() => this.router.navigate(['/contactos']), 1500);
      },
      error: (err) => {
        console.error('Error al guardar:', err);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo guardar el contacto. Intenta de nuevo.',
          icon: 'error'
        });
      }
    });
  }

  ngOnInit() {
    this.paisService.getPaises().subscribe((data) => {
      this.paises = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    });
  }
}
