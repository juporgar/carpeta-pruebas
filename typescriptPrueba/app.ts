// class People{
//     private name:string;
//     private lastname:string;
//     protected constructor(nombre:string)
//     {
//         this.name=nombre;
//     }

//     getNombre():string{
//         return this.name;
//     }

//     setNombre(nombre:string):void{
//         this.name = nombre;
//     }
// }

// class User extends People
// {
//     private id:number;
//     constructor(nombre:string, id:number)
//     {
//         super(nombre);
//     }
//     setId(id:number)
//     {
//         this.id = id;
//     }
//     getId():number
//     {
//         return this.id;
//     }
// }

// let user = new User("Xavi",1)
// alert(user.getNombre());
// user.setNombre("pepe");
// alert(user.getNombre());
// alert(user.getId());

//Abstracto 

// abstract class Persona{
//     nombre:string;
//     constructor(public name:string){
//         this.nombre=name;
//     }
//     abstract dameNombre():string;
//     public introduceNombre(nombre:string){
//         this.nombre = nombre;  //metodo implementado
//     }
// }

// class Xavi extends Persona{
//     constructor(public name:string)
//     {
//         super(name); //super: pasa los parametros al padre
//     }
//     dameNombre():string{
//         return this.nombre; 
//     }
// }

// let xavi = new Xavi("Xavi"); //Metodo de lubertad
// alert(xavi.dameNombre())
// xavi.introduceNombre('Pepe'); //Metodo de lubertad
// alert(xavi.dameNombre());

//Interface--Implementación

// interface vehiculo{
//     ruedas:number;
//     combustible:string;
//     setRuedas(ruedas:number):void
//     getRuedas():number    
// }
// interface combustible{
//     setCombustible(combustible:string):void
//     getCombustible():string
// }

// class Coche implements vehiculo, combustible{
//     ruedas:number;
//     combustible:string;

//     contructor(ruedas:number){
//         this.ruedas=ruedas;
//     }
    
//     setRuedas(ruedas:number):void{
//         this.ruedas= ruedas ;
//     }
//     getRuedas():number{
//         return this.ruedas
//     }
//     setCombustible(combustible:string):void{
//         this.combustible = combustible;
//     }
//     getCombustible():string{
//         return this.combustible
//     }
// }
// let coche = new Coche();
// coche.setRuedas(4);
// alert(coche.getRuedas());
// coche.setCombustible("Diesel");
// alert(coche.getCombustible());

// //Modulo

// import {Vehiculo} from './interfacevehiculo';
// let vehiculo = new Vehiculo(4,'Diesel');
// console.log(vehiculo.getCombustible());

//Namespaces

