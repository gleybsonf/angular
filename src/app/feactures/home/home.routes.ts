import { Routes } from '@angular/router';
import { HomeComponent } from './home.component'; // Supondo que você tenha um HomeComponent standalone

export const HOME_ROUTES: Routes = [
  {
    path: '', // A rota vazia serve para o componente ser o padrão de "/home"
    component: HomeComponent
  }
];