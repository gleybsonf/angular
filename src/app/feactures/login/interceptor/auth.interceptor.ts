import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
 
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Passou no interceptor", req);
  const router = inject(Router);
  const token = localStorage.getItem("token");

  // Clona a request e adiciona o token no header (se existir)
  const authReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    : req;

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401) {
        // Se o backend retornou Unauthorized → logout e redireciona
        localStorage.removeItem("token");
        router.navigateByUrl("/login");
      }
      return throwError(() => err);
    })
  );
};
