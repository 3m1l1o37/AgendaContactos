import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactosService } from '../../services/contactos';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-contacto.html',
  styleUrl: './editar-contacto.css'
})
export class EditarContacto {

  servicio = inject(ContactosService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  contacto: any = {
    id: 0,
    nombre: '',
    telefono: '',
    email: ''
  };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const encontrado = this.servicio.getContactos()().find(c => c.id === id);

    if (encontrado) {
      this.contacto = { ...encontrado };
    }
  }

  guardar() {
    this.servicio.actualizar(this.contacto);
    alert('Contacto actualizado');
    this.router.navigate(['/contactos']);
  }
}