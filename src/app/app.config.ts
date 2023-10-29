import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table-form'
  },
  {
    path: 'table-form',
    loadComponent: () => import('./core/components/table-form')
      .then((c) => c.TableFormComponent)
  },
  {
    path: 'mat-select', loadComponent: () => import('./core/components/mat-select')
      .then((c) => c.MatSelectComponent)
  },
  {
    path: '**',
    redirectTo: 'table-form'
  }

];

export const appConfig: ApplicationConfig = {
  providers: [ provideAnimations(), provideRouter(routes) ],
};
