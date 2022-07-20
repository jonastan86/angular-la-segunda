import { Component, OnInit } from '@angular/core';
import { Theme, NavItem } from 'src/app/interfaces/navbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItem: NavItem[] = [
    { 
      label: 'Home',
      url: '/',
    },
    { 
      label: 'Feature',
      url: '/feature',
    },
    { 
      label: 'Pricing',
      url: '/pricing',
    },
       
  ];
  theme: Theme = 'light'

  constructor() { }

  ngOnInit(): void { }  

}

