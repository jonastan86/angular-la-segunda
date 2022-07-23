import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() hero!: Hero;
  //Definimos la variable removeChild  para emitir nuevo evento con EvenEmitter
  @Output() removeChild = new EventEmitter<Hero>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {    
      console.log('click', this.hero)    
  }
  onRemove(): void {
    // Primero tremos el elemento que queremos remover (this.hero)
    console.log('remove', this.hero);
   
    //Emitimos el evento para remover el elemnto
    this.removeChild.emit(this.hero);
  
}

 
}
