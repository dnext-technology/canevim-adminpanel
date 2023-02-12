import { Routes } from '@angular/router';
const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@layoutModule/components/layout/layout.component'),
    children: [],
  },
];
export default layoutRoutes;
