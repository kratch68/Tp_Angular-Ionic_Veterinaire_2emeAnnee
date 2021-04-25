// 
//NOM DU FICHIER : animal.service.ts
//REALISATEUR : cabellic Gwenael
//DATE : 2020/01/21
//DESCRIPTION : Fichier contenant les services d'animal
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  id:number;
  nom:string;
  private listeAnimal : Array<Animal>;
  private nouveauAnimal:Animal;
  constructor(private httpClient:HttpClient) { 
    this.listeAnimal = new Array<Animal>();
    this.nouveauAnimal= new Animal(0,0,0,"","");
  }

  setIdAnimal(id){
    this.id = id;
  }

  getIdAnimal(){
    return this.id;
  }

  setNomAnimal(nom){
    this.nom = nom;
  }

  getNomAnimal(){
    return this.nom;
  }

  addAnimal(nouveauAnimal){
    this.listeAnimal.push(nouveauAnimal);
  }

  deleteAnimal(indice){
    for(var i=0; i < this.listeAnimal.length; i++){
      if(this.listeAnimal[i].id == indice)
      {
        this.listeAnimal.splice(indice, 1);
      }
    }
  }

}
