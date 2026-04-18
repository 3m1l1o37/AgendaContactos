import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from '../../services/contactos';
import { ChangeDetectorRef } from '@angular/core';
import { AvatarService } from "../../services/avatar.service.ts";


@Component({
  standalone: true,
  templateUrl: './detalle-contacto.html',
  styleUrls: ['./detalle-contacto.css']

})
export class DetalleContacto implements OnInit {

  route = inject(ActivatedRoute);
  servicio = inject(ContactosService);
  cdr = inject(ChangeDetectorRef);
  avatarService = inject(AvatarService);

  contacto: any;
  cargando = true;

  ngOnInit() {
    console.log("Entre al detalle")
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID recibido:', id); // 👈 DEBUG

    this.servicio.getById(id).subscribe({
      next: (data) => {
        console.log('DATA:', data); // 👈 DEBUG
        this.contacto = data;
        this.cargando = false;

        this.cdr.detectChanges(); // 👈 🔥 SOLUCIÓN
      },
      error: (err) => {
        console.error('ERROR:', err); // 👈 DEBUG
        this.cargando = false;
        this.cdr.detectChanges(); // 👈 también aquí

      }
    });
  }
}