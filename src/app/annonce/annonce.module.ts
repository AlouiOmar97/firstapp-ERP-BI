import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    AddAnnonceComponent,
    ListAnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ],
  providers:[]
})
export class AnnonceModule { }
