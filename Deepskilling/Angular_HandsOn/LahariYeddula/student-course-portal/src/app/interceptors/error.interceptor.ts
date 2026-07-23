import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// Step 90: Intercepts HTTP errors globally (401 redirect to home, 500 error log)
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        console.warn('Unauthorized request - redirecting to home.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server side 500 error occurred.');
      }
      return throwError(() => error);
    })
  );
};
