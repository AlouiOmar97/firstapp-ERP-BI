import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

const routes : Routes=[
  { path:"annonce", component:AnnonceComponent,
    children: [
      { path:"add", component:AddAnnonceComponent },
      { path:"list", component:ListAnnonceComponent}
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AnnonceRoutingModule { }
