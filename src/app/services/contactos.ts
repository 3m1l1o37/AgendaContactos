import { Injectable, signal } from '@angular/core';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contactos = signal<Contacto[]>([
    { id: 1, nombre: 'Juan', telefono: '1234567890', email: 'juan@gmail.com' },
    { id: 2, nombre: 'Maria', telefono: '9876543210', email: 'maria@gmail.com' }
  ]);

  getContactos() {
    return this.contactos;
  }

  eliminar(id: number) {
    this.contactos.update(lista => lista.filter(c => c.id !== id));
  }
  actualizar(contactoActualizado: any) {
  this.contactos.update(lista =>
    lista.map(c => c.id === contactoActualizado.id ? contactoActualizado : c));
  }
}