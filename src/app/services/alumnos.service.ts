import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  listaAlumnos() {
    return [
      {
        alumno: { apellidos: 'Lonzayes', nombres: 'Gabriel' },
        editar: false,
        asistencias: 8,
      },
      {
        alumno: { apellidos: 'Linares', nombres: 'Camila' },
        editar: false,
        asistencias: 7,
      },
      {
        alumno: { apellidos: 'Armenteros', nombres: 'Julia' },
        editar: false,
        asistencias: 6,
      },
      {
        alumno: { apellidos: 'Perez', nombres: 'Cecilia' },
        editar: false,
        asistencias: 9,
      },
      {
        alumno: { apellidos: 'Terranova', nombres: 'Gabriel' },
        editar: false,
        asistencias: 8,
      },
      {
        alumno: { apellidos: 'Alca Montoya', nombres: 'Aylin' },
        editar: false,
        asistencias: 9,
      },
      {
        alumno: { apellidos: 'Macalupú', nombres: 'Valeria' },
        editar: false,
        asistencias: 7,
      },
    ];
  }
  constructor() {}
}
