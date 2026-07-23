import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // Hardcoded isLoggedIn status for auth guard check
  const isLoggedIn = true;

  if (isLoggedIn) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
