import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación de Calculadora';
  resultado: number = 0;

  sumaRealizada(resultado: number) {
    this.resultado = resultado;
  }
}
