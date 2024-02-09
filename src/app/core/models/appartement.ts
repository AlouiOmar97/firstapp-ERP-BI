import { Residence } from "./residence"; 

 

export class Appartement { 

 id!: number; 

 numAppart!: number; 

 numEtage!: number; 

 surface!: number; 

 terrasse!: string; 

 surfaceTerrasse!: number; 

 category!: string; 

 description!: string; 

 residence!: Residence; 

 status!: boolean 

} 