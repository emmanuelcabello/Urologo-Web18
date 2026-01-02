import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero-component'; // Verifica que esta ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent], // HeroComponent DEBE estar aquí
  templateUrl: './app.html', // Verifica que no diga app.component.html
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'urologo-web';
}