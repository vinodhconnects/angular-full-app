import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const login = inject(LoginService);
  if(login.getStatus())
      return true
    return false
};
