import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'IronMan';
    edad: number = 45;

    obtenerNombre(): string {

        return `${this.nombre} - ${this.edad}`;
    }

    get capitalizar(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(): void{
        this.edad = 32;
    }
}