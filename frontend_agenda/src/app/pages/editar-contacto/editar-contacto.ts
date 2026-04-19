import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactosService } from '../../services/contactos';
import Swal from 'sweetalert2';
import { Contacto } from '../../models/contacto';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-contacto.html',
  styleUrl: './editar-contacto.css'
})
export class EditarContacto implements OnInit {

  servicio = inject(ContactosService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);

  form = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pais: ['']
  });

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.servicio.getById(id).subscribe((data) => {
      if (data) {
        this.form.patchValue(data);
      }
    });
  }

  guardar() {
    if (this.form.invalid) return;

    this.servicio.actualizar(this.form.value as Contacto).subscribe({
      next: () => {
        this.servicio.cargarContactos();

        Swal.fire({
          title: '¡Actualizado!',
          text: 'El contacto se actualizó correctamente',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => this.router.navigate(['/contactos']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar:', err);

        Swal.fire({
          title: 'Error',
          text: 'No se pudo actualizar el contacto. Intenta de nuevo.',
          icon: 'error'
        });
      }
    });
  }
}
