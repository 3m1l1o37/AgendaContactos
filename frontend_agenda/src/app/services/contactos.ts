// import { Injectable, signal } from '@angular/core';
// import { Contacto } from '../models/contacto';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactosService {

//   //esto son datos locales
//    contactos = signal<Contacto[]>([
//      { id: 1, nombre: 'Juan', telefono: '1234567890', email: 'juan@gmail.com' },
//      { id: 2, nombre: 'Maria', telefono: '9876543210', email: 'maria@gmail.com' }
//    ]);

//   getContactos() {
//     return this.contactos;
//   }

//   eliminar(id: number) {
//     this.contactos.update(lista => lista.filter(c => c.id !== id));
//   }
//   actualizar(contactoActualizado: any) {
//   this.contactos.update(lista =>
//     lista.map(c => c.id === contactoActualizado.id ? contactoActualizado : c));
//   }
// }

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private apiUrl = 'https://endearing-reprieve-production-b1c7.up.railway.app/api/contactos';

  contactos = signal<Contacto[]>([]);

  constructor(private http: HttpClient) {}

  //  Obtener contactos desde backend
  cargarContactos() {
    this.http.get<Contacto[]>(this.apiUrl)
      .subscribe(data => {
        this.contactos.set(data);
      });
  }

  //  Agregar contacto
  agregar(contacto: Omit<Contacto, 'id'>) {
    this.http.post(this.apiUrl, contacto)
      .subscribe(() => this.cargarContactos());
  }

  //  Actualizar contacto
  actualizar(contacto: Contacto) {
    this.http.put(`${this.apiUrl}/${contacto.id}`, contacto)
      .subscribe(() => this.cargarContactos());
  }

  //  Eliminar contacto
  eliminar(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe(() => this.cargarContactos());
  }

  //obtener por id los detalles de un contacto
  // getById(id: number) {
  //   return this.http.get<any>(`http://localhost:3000/api/contactos/${id}`);
  // }
  getById(id: number) {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}
}
