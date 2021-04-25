// 
// NOM DU FICHIER : animaux-intervention.page.ts 
// REALISATION INFORMATIQUE : Cabellic Gwenael 
// DATE DE CREATION : 2020/10/21
// DESCRIPTION : contient toutes les méthodes pour les interventions
// 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AnimalService } from '../services/animal.service';
import { InterventionService } from '../services/intervention.service';
import { Intervention } from '../models/intervention';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-animaux-intervention',
  templateUrl: './animaux-intervention.page.html',
  styleUrls: ['./animaux-intervention.page.scss'],
})
export class AnimauxInterventionPage  {

  nouvelleIntervention:any;
  idAnimal:number;
  nomAnimal:string;
  listeIntervention:any;

  constructor(private router:Router, private httpClient:HttpClient, private animalService:AnimalService, private interventionService:InterventionService, private alertController:AlertController ) { 
    this.initialiserIntervention();
  }

  //Methode permettant d'initialiser la listeIntervention par l'id de l'animal
  initialiserIntervention(){
    this.nouvelleIntervention = new Intervention(0,0,0,"","");
    this.nomAnimal = this.animalService.getNomAnimal();
    this.idAnimal = this.animalService.getIdAnimal();
    console.log("Animal : " + this.nomAnimal);
    this.httpClient.get("http://localhost/Api/api_listeIntervention.php/?animal_id=" + this.idAnimal).subscribe(
      resultat =>
      {
        console.log("Résultat: ",resultat);
        this.listeIntervention = resultat;
      },
      erreur =>
      {
        console.log("Erreur: "+erreur);
      }
    )

  }

  //Methode permettant d'ajouer une nouvelle intervention dans la listeIntervention et dans bdd
  async ajouterIntervention(){
    this.nouvelleIntervention.animal_id = this.idAnimal;
    this.httpClient.post("http://localhost/Api/api_ajouterIntervention.php", this.nouvelleIntervention, { headers: {'Access-Control-Allow-Origin': '*'}} ).subscribe(
      data=>
      {
        console.log("Résultat: ",data);
        this.interventionService.addIntervention(this.nouvelleIntervention);
        this.initialiserIntervention();
      },
      error => 
      {
        console.log("Erreur:",error);
      }
    );
  }

  //Methode permettant de supprimer une intervention de la listeIntervention et de la bdd par son id
  async supprimerIntervention(indice:number){
    console.log("idIntervention : " + indice);
    this.httpClient.get("http://localhost/Api/api_supprimerIntervention.php?intervention_id=" + indice).subscribe(
      resultat =>
      {
        console.log("Résultat: ",resultat);
        this.interventionService.deleteIntervention(indice);
        this.initialiserIntervention();
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
      message: "Voulez-vous vraiment supprimer l'intervention ?",  
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
            this.supprimerIntervention(indice);
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }

  //Methode permettant d'afficher les information dans les input
  editIntervention(Intervention, indice){
    console.log("Intervention :", Intervention);
    this.nouvelleIntervention.id = Intervention.id;
    this.nouvelleIntervention.date = Intervention.date;
    this.nouvelleIntervention.typeIntervention_id = Intervention.intervention;
    this.nouvelleIntervention.duree = Intervention.duree;
  }

  //methode permettant de modifier
  async modifierIntervention(indice:number){
    console.log("idAnimaux",indice);
    this.httpClient.post("http://localhost/Api/api_modifierIntervention.php", this.nouvelleIntervention , { headers: {'Access-Control-Allow-Origin': '*'}}).subscribe(
      data=>
      {
        console.log("Résultat: ", data);
        this.initialiserIntervention();
      }
    );
  }


  //Methode permettant de retourner a la page precedente 
  retour(){
    this.router.navigateByUrl('/client-animaux');
  }

}
