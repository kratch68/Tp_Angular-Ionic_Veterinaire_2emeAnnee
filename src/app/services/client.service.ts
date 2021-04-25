// 
//NOM DU FICHIER : client.service.ts
//REALISATEUR : cabellic Gwenael
//DATE : 2020/01/21
//DESCRIPTION : Fichier contenant les services de client
//
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private listeClient : Array<Client>;
  private nouveauClient : Client;
  id : number;
  nom : string;
  prenom:string;
  telephone:string;

  constructor(private httpClient:HttpClient) { 
    this.listeClient = new Array<Client>();
    this.nouveauClient = new Client(0,"", "", "");
  }

  setIdClient(id){
    this.id = id;
  }
  
  getIdClient()
  {
    return this.id;
  }

  setNomClient(nom){
    this.nom = nom;
  }

  getNomClient(){
    return this.nom;
  }

  setPrenomClient(prenom)
  {
    this.prenom = prenom;
  }

  getPrenomClient(){
    return this.prenom;
  }

  setTelephoneClient(telephone){
    this.telephone = telephone;
  }

  getTelephoneClient(){
    return this.telephone;
  }

  getListeClient()
  {
    return this.listeClient;
  }

  setListeClient(liste)
  {
    this.listeClient = liste;
  }

  addClient(nouveauClient){
    this.listeClient.push(nouveauClient);
  }

  deleteClient(indice){
    for(var i=0; i < this.listeClient.length; i++){
      if(this.listeClient[i].id == indice)
      {
        this.listeClient.splice(indice, 1);
      }
    }
  }
}
