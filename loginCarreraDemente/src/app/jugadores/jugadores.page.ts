import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  constructor(private location: Location, private router:Router) { }

  gotodado() {
    this.router.navigateByUrl('/dado');
  }
  
  salir() {
    this.router.navigateByUrl('/home');
  }

  
  
  ngOnInit() {
    
    const btnsalir = document.querySelector('#btnsalir');
    

    btnsalir.addEventListener('click', () => {

      this.salir();

    });

  }

}
