import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos';
import { RouterLink } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos implements OnInit {

  servicio = inject(ContactosService);

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
    if (confirm('¿Seguro que quieres eliminar este contacto?')) {
      this.servicio.eliminar(id);
    }
  }
}