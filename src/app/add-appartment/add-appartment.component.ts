import { Component } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogService } from '../services/log.service';
import { AppartmentService } from '../services/appartment.service';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css'],
  providers:[]
})
export class AddAppartmentComponent {
  residence!: Residence
  appartment:Appartement={
    id: 0,
    numAppart: null,
    numEtage: 0,
    surface: 0,
    terrasse: "", 
    surfaceTerrasse: 0,
    category: "", 
    description: "", 
    residence: this.residence, 
    status: true 
  }
  addAppartForm!: FormGroup

  ngOnInit(): void{
    this.addAppartForm= new FormGroup({
      terasse: new FormControl(this.appartment.terrasse,[Validators.required,Validators.minLength(3)]),
      numAppart: new FormControl(this.appartment.numAppart, Validators.required)
    })
  }
  constructor(private logService : LogService, private appartService: AppartmentService){}
  get terasse(){return this.addAppartForm.get('terasse')}
  get numAppart(){return this.addAppartForm.get('numAppart')}
  addAppartment(){
   // console.log(this.addAppartForm.value);
    this.logService.log(this.addAppartForm.value)
    //this.logService.warn(this.addAppartForm.value)
    //this.logService.error(this.addAppartForm.value)
    this.appartService.addAppartment(this.addAppartForm.value)
    .subscribe(()=>{console.log("Appartment added !")})
  }

}
