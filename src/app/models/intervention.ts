// 
//NOM DU FICHIER : intervention.ts
//REALISATEUR : cabellic Gwenael
//DATE : 2020/01/21
//DESCRIPTION : Fichier contenant la Classe intervention
//
export class Intervention
{
    public id :number;
    public animal_id : number;
    public typeIntervention_id : number;
    public date : string;
    public duree : string;

    constructor(id:number, animal_id:number,typeIntervention_id:number,date:string,duree:string){
        this.id = id;
        this.animal_id = animal_id;
        this.typeIntervention_id = typeIntervention_id;
        this.date = date;
        this.duree = duree;
    }
}