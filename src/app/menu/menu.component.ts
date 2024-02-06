import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Inicio', path: 'paginas/inicio'},
    {titulo: 'Recarga', path: 'paginas/recarga'},
  ]
}
