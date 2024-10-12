
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  cursos = [
    { titulo: 'Curso de JavaScript', descripcion: 'Aprende los fundamentos de JavaScript.' },
    { titulo: 'Curso de Python', descripcion: 'Domina Python para el desarrollo web.' },
    { titulo: 'Curso de React', descripcion: 'Construye aplicaciones con React.' },
  ];

  constructor() {}
}
