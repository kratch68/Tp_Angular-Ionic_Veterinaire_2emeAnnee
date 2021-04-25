// 
//NOM DU FICHIER : client.ts
//REALISATEUR : cabellic Gwenael
//DATE : 2020/01/21
//DESCRIPTION : Fichier contenant la Classe Client
//
export class Client
{
    public id : number;
    public nom : string;
    public prenom : string;
    public telephone : string;

    constructor(id:number, nom:string, prenom:string, telephone:string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
    }
}