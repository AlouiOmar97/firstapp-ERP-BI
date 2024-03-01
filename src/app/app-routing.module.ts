import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  { path:"residence", component:ResidencesComponent},
  { path:"residence/add", component:AddResidenceComponent},
  { path:"residence/:id", component:ResidenceDetailsComponent},
  { path:"appartment", component:AppartmentComponent},
  { path:"appartment/add", component:AddAppartmentComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
