import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SerachGifsResponse, Gif } from '../interface/gigfs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey      : string = 'm8Br0lTdaHxhrL9xb8YWoMQzeGcaTEu1'
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  private _historial  : string[] = [];

  public resultado:Gif []= [];

  get historial(){
    return [...this._historial];
  }

   //Constructor del servicio htttp. Trabaja con observables
  constructor( private http:HttpClient){

    //Obtiene los datos guardados en LocalStorage
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    //Lo mismo que arriba xro en una linea
    this.resultado = JSON.parse(localStorage.getItem('resultado')!)||[];
  }
  
  buscarGifs( query: string = ''){ //al principio de l metodo se podria async
    
    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)){
      
      this._historial.unshift(query);    
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial)); //guarda en la memoria local las busquedas realizadas
    }
    
    const params = new HttpParams()
                      .set('api_key', this.apiKey)
                      .set('limit', '10')
                      .set('q', query)
    
    this.http.get<SerachGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe( (resp) =>{ //el subscribe se ejecuta cuando tengamos la resolucion del get
      this.resultado = resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultado))
            
          })

    //Con fech await ----> en el metodo buscarGifs hay que empezar con <async>

  //   const resp =  await fetch('https://api.giphy.com/v1/gifs/search?api_key=m8Br0lTdaHxhrL9xb8YWoMQzeGcaTEu1&q=dragon ball z&limit=10')
  //   const data = await resp.json();
  //   console.log(data);
    
   }
}
