import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PaisService {

  http = inject(HttpClient);

  getPaises() {
    return this.http.get<any[]>(
      'https://restcountries.com/v3.1/all?fields=name,flags,cca3'
    );
  }
}