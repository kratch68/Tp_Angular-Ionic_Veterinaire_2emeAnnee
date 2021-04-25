// 
//NOM DU FICHIER : intervention.service.ts
//REALISATEUR : cabellic Gwenael
//DATE : 2020/01/21
//DESCRIPTION : Fichier contenant les services d'intervention
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intervention } from '../models/intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  id:number;
  nom:string;
  private listeIntervention:Array<Intervention>;
  private nouvelleIntervention:Intervention;

  constructor(private httpClient:HttpClient) { 
    this.listeIntervention = new Array<Intervention>();
    this.nouvelleIntervention = new Intervention(0,0,0,"","");
  }

  setIdIntervention(id){
    this.id = id;
  }

  getIdIntervention(){
    return this.id;
  }

  setNomIntervention(nom){
    this.nom = nom;
  }

  getNomIntervention(){
    return this.nom;
  }

  addIntervention(nouvelleIntervention){
    this.listeIntervention.push(nouvelleIntervention);
  }

  deleteIntervention(indice){
    for(var i=0; i < this.listeIntervention.length; i++){
      if(this.listeIntervention[i].id == indice)
      {
        this.listeIntervention.splice(indice, 1);
      }
    }
  }
}
