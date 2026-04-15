import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },

  {
    path: 'contactos',
    loadComponent: () =>
      import('./pages/contactos/contactos').then(m => m.Contactos)
  },
  {
    path: 'contacto/:id',
    loadComponent: () =>
      import('./pages/detalle-contacto/detalle-contacto').then(m => m.DetalleContacto)
  },
  {
    path: 'agregar',
    loadComponent: () =>
      import('./pages/agregar-contacto/agregar-contacto').then(m => m.AgregarContacto)
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('./pages/editar-contacto/editar-contacto').then(m => m.EditarContacto)
  },
  {
    path: 'buscar',
    loadComponent: () =>
      import('./pages/buscar/buscar').then(m => m.Buscar)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];