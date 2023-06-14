import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./feature/features.routes').then(mod => mod.FEATURE_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.routes').then(mod => mod.AUTH_ROUTES)
  }
];
