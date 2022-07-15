import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  //Variables
  type = 'button'; 
  colors: string[]= [];
  name = 'productos';
  show = false;

  //Eventos
  onClick(event: MouseEvent){
      console.log('click me', event);
      //this para hacer referencia d la clase type
      this.type = 'submit'//Cuando haga click 'button' se convertirá en 'submit' 
      this.show = !this.show //show es false cuando le damos click la pasamos a su opuesto con "!"
    }

  constructor() { }

  ngOnInit(): void {
  }

  // Directivas (expanden el funcinamiento por defecto de los elementos html)
// hay 4 tipos de directivas(1 extruturales-  2 de atributos- 3 de template y 4 custom directive)
}
