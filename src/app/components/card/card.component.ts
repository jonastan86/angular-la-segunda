import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() hero!: Hero;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
