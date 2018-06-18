export class Vehiculo{
    ruedas:number;
    combustible:string;
    constructor(ruedas:number, combustible:string){
        this.ruedas=ruedas
        this.combustible=combustible
    }
    getCombustible():string{
        return this.combustible;
    }
}