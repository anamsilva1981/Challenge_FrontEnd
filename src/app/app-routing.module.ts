import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./core/routes/routes').then((module) => module.productRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
