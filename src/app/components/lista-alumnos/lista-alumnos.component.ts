import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['alumno', 'asistencias', 'acciones'];
  dataSource = ELEMENT_DATA;
  constructor(public fb: FormBuilder) {}
  formularioEditar = this.fb.group({
    nombres: [''],
    apellidos: [''],
    asistencias: [''],
  });

  nuevoAlumno() {}
}

export interface Alumnos {
  alumno: { nombres: string; apellidos: string };
  editar: boolean;
  asistencias: number;
}

const ELEMENT_DATA: Alumnos[] = [
  {
    alumno: { apellidos: 'Gimenez', nombres: 'Gabriel' },
    editar: false,
    asistencias: 8,
  },
  {
    alumno: { apellidos: 'Lugones', nombres: 'Camila' },
    editar: false,
    asistencias: 7,
  },
  {
    alumno: { apellidos: 'Andrada', nombres: 'Julia' },
    editar: false,
    asistencias: 6,
  },
  {
    alumno: { apellidos: 'Perales', nombres: 'Cecilia' },
    editar: false,
    asistencias: 9,
  },
  {
    alumno: { apellidos: 'Piñedo', nombres: 'Gabriel' },
    editar: false,
    asistencias: 8,
  },
  {
    alumno: { apellidos: 'Saenz', nombres: 'Aylin' },
    editar: false,
    asistencias: 9,
  },
  {
    alumno: { apellidos: 'Obes', nombres: 'Valeria' },
    editar: false,
    asistencias: 7,
  },
];
