import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../services/contactos';
import { Contacto } from '../../models/contacto';
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-contacto.html',
  styleUrl: './editar-contacto.css'
})
export class EditarContacto implements OnInit {

  servicio = inject(ContactosService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  contacto: Contacto = {
    id: 0,
    nombre: '',
    telefono: '',
    email: '',
    pais: ''
  };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    //  cargar datos del backend
    this.servicio.cargarContactos();

    // ⏱ esperar a que carguen
    setTimeout(() => {
      const encontrado = this.servicio.contactos()
        .find((c) => c.id === id);

      if (encontrado) {
        this.contacto = { ...encontrado };
      }
    }, 300);
  }

  guardar() {
    this.servicio.actualizar(this.contacto);

    Swal.fire({
      title: '¡Actualizado!',
      text: 'El contacto se actualizó correctamente',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    });

    setTimeout(() => {
      this.router.navigate(['/contactos']);
    }, 1500);
  }
}