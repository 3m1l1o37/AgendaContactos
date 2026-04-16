import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../services/contactos';
import { Contacto } from '../../models/contacto';

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
    email: ''
  };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 🔥 cargar datos del backend
    this.servicio.cargarContactos();

    // ⏱️ esperar a que carguen
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
    alert('Contacto actualizado');
    this.router.navigate(['/contactos']);
  }
}