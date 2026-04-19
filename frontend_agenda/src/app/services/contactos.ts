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

  cargarContactos() {
    this.http.get<Contacto[]>(this.apiUrl)
      .subscribe(data => {
        this.contactos.set(data);
      });
  }

  agregar(contacto: Omit<Contacto, 'id'>) {
    return this.http.post(this.apiUrl, contacto);
  }

  actualizar(contacto: Contacto) {
    return this.http.put(`${this.apiUrl}/${contacto.id}`, contacto);
  }

  eliminar(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe(() => this.cargarContactos());
  }

  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
