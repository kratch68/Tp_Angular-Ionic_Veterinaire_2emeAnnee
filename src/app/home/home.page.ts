// 
// NOM DU FICHIER : home.page.ts 
// REALISATION INFORMATIQUE : Cabellic Gwenael 
// DATE DE CREATION : 2020/10/21
// DESCRIPTION : contient toutes les méthodes pour les clients
// 
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listeClient:any;
  nouveauClient :any;
  id : number;
  

  constructor(private router:Router, private httpClient:HttpClient, private clientService:ClientService, private alertController:AlertController) {
    this.initialiseClient();
  }

  //Methode permettant d'initialiser la listeClients
  initialiseClient(){
    this.httpClient.get("http://localhost/Api/api_listeClient.php").subscribe(
      resultat =>
      {
        console.log("Résultat: ",resultat);
        this.listeClient = resultat;
      },
      erreur =>
      {
        console.log("Erreur: ",erreur);
      }
    )
    this.nouveauClient = new Client(0,"","","");
  }

  //Methode permettant d'ajouter un nouveau client dans la bdd et dans la listeClient
  async ajouterClient(){
    this.httpClient.post("http://localhost/Api/api_ajouterClient.php", this.nouveauClient, { headers: {'Access-Control-Allow-Origin': '*'}} ).subscribe(
      data => 
      {
        console.log("Résultat: ", data);
        this.clientService.setIdClient(data);
        this.clientService.addClient(this.nouveauClient);
        this.initialiseClient();
      }, 
       error => 
      {
        console.log("Erreur: ",error);
      }
    );
  }

  //Methode permettant de supprimer un client de la bdd et de la listeClient par son id
  async supprimerClient(indice:number){
    console.log(indice);
    this.httpClient.get("http://localhost/Api/api_supprimerClient.php?client_id=" + indice).subscribe(
      resultat =>
      {
        console.log("Résultat: ",resultat);
        this.clientService.deleteClient(indice);
        this.initialiseClient();
      },
      error => 
       {
        console.log("Erreur: ",error);
       }
    );
  
  }

  //Methode de confirmation lors de la suppresion
  async showComfirm(indice:number)
  {
    const confirm = await this.alertController.create({  
      header: 'Supprimer',  
      message: 'Voulez-vous vraiment supprimer le client ?',  
      buttons: [  
        {  
          text: 'Annuler',  
          role: 'cancel',  
          handler: () => {  
            console.log('Confirm Cancel');  
          }  
        },  
        {  
          text: 'Oui',  
          handler: () => {  
            console.log('Confirm Okay.'); 
             
            this.supprimerClient(indice);
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }

  //Methode permettant d'afficher la liste des animaux du client
  afficherDetailClient(indice:number, nom:string){
    this.clientService.setNomClient(nom);
    this.clientService.setIdClient(indice);
    this.router.navigateByUrl('client-animaux');
  }

  //Methode permettant d'afficher les information dans les input
  editClient(client, indice){
    console.log("client :", client);
    this.nouveauClient.id=client.id;
    this.nouveauClient.prenom=client.prenom;
    this.nouveauClient.nom=client.nom;
    this.nouveauClient.telephone=client.telephone;
  }

  //methode permettant de modifier
  async modifierClient(indice:number){
    console.log("idClient",indice);
    this.httpClient.post("http://localhost/Api/api_modifierClient.php", this.nouveauClient , { headers: {'Access-Control-Allow-Origin': '*'}}).subscribe(
      data=>
      {
        console.log("Résultat: ", data);
        this.initialiseClient();
      }
    );
  }

}
