import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./feactures/login/login.component";
import { GLOBAL_CONSTANTS } from "./core/constants/global.constants";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // Redireciona a raiz para o login
  { path: "login", component: LoginComponent, title: GLOBAL_CONSTANTS.LOGIN }, // Rota pública de login
];
