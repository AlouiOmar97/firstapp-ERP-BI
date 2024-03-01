import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
addResidenceForm!: FormGroup
residence: Residence={
  id:0,
  name:"Residence 4",
  address:"",
  image:""
}

ngOnInit(): void{
  this.addResidenceForm= new FormGroup({
    name: new FormControl(this.residence.name),
    address: new FormControl(this.residence.address)
  })
}

}
