import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AvatarService {

  getAvatar(nombre: string, estilo: string = 'adventurer'): string {
    return `https://api.dicebear.com/7.x/${estilo}/svg?seed=${nombre}`;
  }
}