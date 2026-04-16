import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos';
import { Router } from '@angular/router';
import { ContactoCard } from '../../components/contacto-card/contacto-card';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ContactoCard],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos implements OnInit {

  servicio = inject(ContactosService);  router = inject(Router);
  //   usar el signal directamente
  contactos = this.servicio.contactos;

  busqueda = signal('');

  contactosFiltrados = computed(() =>
    this.contactos().filter(c =>
      c.nombre.toLowerCase().includes(this.busqueda().toLowerCase())
    )
  );

  //  cargar datos del backend
  ngOnInit() {
    this.servicio.cargarContactos();
  }

  eliminar(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminar(id);

        Swal.fire('Eliminado', 'El contacto fue eliminado', 'success');
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }
}