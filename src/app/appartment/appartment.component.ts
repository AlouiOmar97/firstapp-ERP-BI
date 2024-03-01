import { Component } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { AppartmentService } from '../services/appartment.service';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent {
  searchSurface:number=600
  residencesList: Residence[]=[ 

    {id: 1, name: "Residence 1", address: "Address 1", image:"image 1"}, 

    {id: 2, name: "Residence 2", address: "Address 2", image:"image 2"}, 

    {id: 3, name: "Residence 3", address: "Address 3", image:"image 3"} 

  ] 

  appartementsList: Appartement[]= 

  [ 

    {id: 1, terrasse: "Terrasse 1", numAppart: 18, numEtage: 0, surface: 500, surfaceTerrasse: 250, category: "category 1", description: "appartement desc 1", status: true ,residence: this.residencesList[0]}, 

    {id: 2, terrasse: "Terrasse 2", numAppart: 21, numEtage: 5, surface: 250, surfaceTerrasse: 250, category: "category 2", description: "appartement desc 2", status: false ,residence: this.residencesList[0]}, 

    {id: 3, terrasse: "Terrasse 3", numAppart: 16, numEtage: 8, surface: 300, surfaceTerrasse: 250, category: "category 3", description: "appartement desc 3", status: true ,residence: this.residencesList[0]}, 

    {id: 4, terrasse: "Terrasse 4", numAppart: 16, numEtage: 8, surface: 600, surfaceTerrasse: 250, category: "category 4", description: "appartement desc 4", status: true ,residence: this.residencesList[1]}, 

    {id: 5, terrasse: "Terrasse 5", numAppart: 16, numEtage: 8, surface: 100, surfaceTerrasse: 250, category: "category 5", description: "appartement desc 5", status: true ,residence: this.residencesList[1]}, 

    {id: 6, terrasse: "Terrasse 6", numAppart: 16, numEtage: 8, surface: 420, surfaceTerrasse: 260, category: "category 6", description: "appartement desc 6", status: true ,residence: this.residencesList[2]}, 

 

  ] 

  constructor(private appartService: AppartmentService){}

  ngOnInit(){
    this.appartService.findAllAppartment().subscribe((data)=>{
      this.appartementsList=data
    })
  }

  deleteAppart(id:number){
    this.appartService.deleteAppartment(id)
    .subscribe(()=>{console.log('appartment deleted !')})
  }

}
