import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ResidencesComponent,
    AppartmentComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AddAppartmentComponent
  ],
  imports: [
    BrowserModule,
    AnnonceModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
