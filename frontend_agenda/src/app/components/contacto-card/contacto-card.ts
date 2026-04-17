import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { inject } from '@angular/core';
import { AvatarService } from "../../services/avatar.service.ts";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-card',
  imports: [],
  templateUrl: './contacto-card.html',
  styleUrl: './contacto-card.css',
})
export class ContactoCard {

  avatarService = inject(AvatarService);
  router = inject(Router); // router para hacer las redirecciones al detalle de contacto
  
  @Input() contacto!: Contacto; // NOTA @Input: Recibe el objeto contacto para mostrar sus datos en la tarjeta

  @Output() onEdit = new EventEmitter<number>(); // NOTA @Output: Emite el ID del contacto cuando se hace clic en editar
  @Output() onDelete = new EventEmitter<number>(); // NOTA @Output: Emite el ID del contacto cuando se hace clic en eliminar

  editar(event: Event) {
    event.stopPropagation();
    this.onEdit.emit(this.contacto.id);
    
  }

  eliminar(event: Event) {
    event.stopPropagation();
    this.onDelete.emit(this.contacto.id);
  }
  //ver detalle usando routing
  verDetalle() {
    this.router.navigate(['/detalle', this.contacto.id]);
  }
}
