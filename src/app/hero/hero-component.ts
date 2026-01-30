import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css'
})
export class HeroComponent {
  // Estos son los labels que después el cliente podrá modificar
  doctorName = 'Dr. Jason Damián Landa Salas';
  cedulaEspecialidad = '09976158';
  cedulaProfesional = '6976906';
  precioConsulta = '900.00';
  telefono = '5665128684';
  mensajeDudas = encodeURIComponent('Hola Dr. Damian Landa, tengo dudas sobre si puede atender mi problema.');


  servicios = [
    'Tratamiento del VPH',
    'Vías Urinarias',
    'Próstata inflamada',
    'Cirugía láser',
    'Infecciones recurrentes'
  ];

  agendarCita() {
    const msg = encodeURIComponent('Hola doctor Damian Landa, deseo agendar una cita');
    window.open(`https://wa.me/52${this.telefono}?text=${msg}`, '_blank');
  }
}