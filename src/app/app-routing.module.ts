import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AppartmentComponent } from './appartment/appartment.component';

const routes: Routes = [
  { path:"residence", component:ResidencesComponent},
  { path:"appartment", component:AppartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
