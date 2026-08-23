import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  const user = auth.currentUser();
  const isLogin = auth.getIsLogin();

  if(isLogin){
    if(user?.role === "user"){
      return true;
    }
  }

  return router.createUrlTree(['/']);
};
