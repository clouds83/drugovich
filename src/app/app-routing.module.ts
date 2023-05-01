import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsListComponent,
  },
  {
    path: 'new-client',
    loadChildren: () =>
      import('./add-client/add-client.module').then((m) => m.AddClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
