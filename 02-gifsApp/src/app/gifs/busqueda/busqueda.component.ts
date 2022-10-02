import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator Explain this element !

  constructor (private gifsService:GifsService ){

  }


  buscar(){
      const value = this.txtBuscar.nativeElement.value;
 
      if(value.trim().length === 0){
        return;
      }

      this.gifsService.buscarGifs(value);

      this.txtBuscar.nativeElement.value = '';
  }

}
