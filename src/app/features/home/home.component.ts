import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      title: 'Suggerimenti di codice',
      description: 'GitHub Copilot suggerisce codice mentre scrivi, basandosi sul contesto del tuo progetto.',
      icon: '💻'
    },
    {
      title: 'Completamento intelligente',
      description: 'Completa funzioni e blocchi di codice con intelligenza artificiale avanzata.',
      icon: '🧠'
    },
    {
      title: 'Documentazione automatica',
      description: 'Genera automaticamente documentazione per il tuo codice.',
      icon: '📝'
    }
  ];
}
