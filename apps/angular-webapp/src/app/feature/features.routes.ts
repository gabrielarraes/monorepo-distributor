import {Route} from "@angular/router";

export const FEATURE_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./panel/panel.component').then(m => m.PanelComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
      }
    ]
  }
]
