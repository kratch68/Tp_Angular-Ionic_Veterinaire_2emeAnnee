//
//NOM DU FICHIER : animal.ts
//REALISATEUR : cabellic Gwenael
//DATE : 2020/01/21
//DESCRIPTION : Fichier contenant la Classe Animal
//
export class Animal{
    public id : number;
    public client_id : number;
    public typeAnimal_id : number;
    public nom : string;
    public dateNaissance : string;

    constructor(id:number,client_id : number,typeAnimal_id : number, nom:string, dateNaissance : string ){
        this.id = id;
        this.client_id = client_id;
        this.typeAnimal_id = typeAnimal_id;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
    }
}