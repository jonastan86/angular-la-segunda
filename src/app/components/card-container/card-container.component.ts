import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent  {
 

  heroes: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

  constructor() { }

  removeChild(hero:any): void{
    // Mostramos el elemento en consola
    console.log('removed', hero);
    //Iteramos todos los elementos menos(!==) el hero que ueremos remover y guardamos en la variable filtered
    const filtered = this.heroes.filter ( (item:Hero)=> item.id !== hero.id);
    console.log(filtered); //Mostramos lo que guardamos en la filtered
    this.heroes = filtered; // remplazamos el array heroes por los datos guardados en filtered
    // De esa forma no mostrara el elemnto que quisimos eliminar
  }
} 
