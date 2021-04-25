// 
// NOM DU FICHIER : client-animaux.page.ts 
// REALISATION INFORMATIQUE : Cabellic Gwenael 
// DATE DE CREATION : 2020/10/21
// DESCRIPTION : contient toutes les méthodes pour les animaux
// 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../models/animal';
import { ClientService } from '../services/client.service';
import { AnimalService } from '../services/animal.service';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-client-animaux',
  templateUrl: './client-animaux.page.html',
  styleUrls: ['./client-animaux.page.scss'],
})
export class ClientAnimauxPage {
  
  nouveauAnimal:any;
  nomClient:string;
  idClient:number;
  listeAnimaux:any;

  constructor(private router:Router, private httpClient:HttpClient, private clientService:ClientService, private animalService:AnimalService, private alertController:AlertController) {
    this.initialiserAnimaux();
   }

  //Methode permettant d'initialiser la liste des animaux du client par l'id du client
  initialiserAnimaux(){
    this.nouveauAnimal= new Animal(0,0,0,"","");
    this.nomClient = this.clientService.getNomClient();
    this.idClient = this.clientService.getIdClient();
    console.log("le client: " + this.nomClient);
    this.httpClient.get("http://localhost/Api/api_listeAnimaux.php/?client_id=" + this.idClient).subscribe(
      resultat =>
      {
        console.log("Résultat: ",resultat);
        this.listeAnimaux = resultat;
      },
      erreur =>
      {
        console.log("Erreur: ",erreur);
      }
    )
  }

  //Methode permettant d'ajouter un nouveau animal a la listeAnimal et dans la bdd
  async ajouterAnimal(){
    this.nouveauAnimal.client_id = this.idClient;
    this.httpClient.post("http://localhost/Api/api_ajouterAnimaux.php", this.nouveauAnimal, { headers: {'Access-Control-Allow-Origin': '*'}} ).subscribe(
      data=>
      {
        console.log("Résultat: ",data);
        this.animalService.addAnimal(this.nouveauAnimal);
        this.initialiserAnimaux();
      },
      error => 
      {
        console.log("Erreur:" ,error);
      }
    );
  }

  //Methode permettant de supprimer un animal de la listeAnimal et de la bdd par son id
  async supprimerAnimaux(indice:number){
    console.log("idAnimal : "+indice);
    this.httpClient.get("http://localhost/Api/api_supprimerAnimal.php?animal_id=" + indice).subscribe(
      resultat =>
      {
        console.log("Résultat: ",resultat);
        this.animalService.deleteAnimal(indice);
        this.initialiserAnimaux();
      },
      error => 
       {
        console.log("Erreur:",error);
       }
    );
  }

  //Methode de confirmation lors de la suppresion
  async showComfirm(indice:number)
  {
    const confirm = await this.alertController.create({  
      header: 'Supprimer',  
      message: "Voulez-vous vraiment supprimer l'animal ?",  
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
            this.supprimerAnimaux(indice);
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }

  //Methode permettant d'afficher les information dans les input
  editAnimal(animal, indice){
    console.log("animal :", animal);
    this.nouveauAnimal.id = animal.id;
    this.nouveauAnimal.nom = animal.nom;
    this.nouveauAnimal.typeAnimal_id = animal.type;
    this.nouveauAnimal.dateNaissance = animal.dateNaissance;
  }

  //methode permettant de modifier
  async modifierAnimal(indice:number){
    console.log("idAnimaux",indice);
    this.httpClient.post("http://localhost/Api/api_modifierAnimal.php", this.nouveauAnimal , { headers: {'Access-Control-Allow-Origin': '*'}}).subscribe(
      data=>
      {
        console.log("Résultat: ", data);
        this.initialiserAnimaux();
      }
    );
  }

  //Methode permettant d'afficher la liste des intervention de l'animal par son id
  afficherDetailAnimal(indice:number, nom:string){
    this.animalService.setIdAnimal(indice);
    this.animalService.setNomAnimal(nom);
    this.router.navigateByUrl('animaux-intervention');
  }

  //Methode permettant de retourner a la page precedente 
  retour(){
    this.router.navigateByUrl('/home');
  }

}
