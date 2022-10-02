import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Batman', 'Superman', 'Masa', 'Piperman']
  heroeBorrado :string = '';

  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || '';
    return this.heroeBorrado;
    
  }

}
