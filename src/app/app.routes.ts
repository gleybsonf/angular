import { Routes } from "@angular/router"; 
import { GLOBAL_CONSTANTS } from "./core/constants/global.constants";
import { LoginComponent } from "./feactures/login/pages/login/login.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // Redireciona a raiz para o login
  { path: "login", component: LoginComponent, title: GLOBAL_CONSTANTS.LOGIN }, // Rota pública de login
];
