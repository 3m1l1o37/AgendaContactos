import { Component, inject, signal, computed } from '@angular/core';
import { ContactosService } from '../../services/contactos';
import { RouterLink } from '@angular/router';

// 👇 IMPORTANTE
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {

  servicio = inject(ContactosService);
  contactos = this.servicio.getContactos();

  busqueda = signal('');

  contactosFiltrados = computed(() =>
    this.contactos().filter(c =>
      c.nombre.toLowerCase().includes(this.busqueda().toLowerCase())
    )
  );

  eliminar(id: number) {
    if (confirm('¿Seguro que quieres eliminar este contacto?')) {
      this.servicio.eliminar(id);
    }
  }
}