import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Mario Rossi',
      role: 'Lead Developer',
      bio: 'Esperto in Angular e TypeScript con oltre 10 anni di esperienza.',
      avatar: 'assets/images/avatar1.png'
    },
    {
      name: 'Giulia Bianchi',
      role: 'UX/UI Designer',
      bio: 'Designer creativa specializzata in interfacce utente intuitive e accessibili.',
      avatar: 'assets/images/avatar2.png'
    },
    {
      name: 'Marco Verdi',
      role: 'Full Stack Developer',
      bio: 'Sviluppatore full stack con competenze in Angular, Node.js e database.',
      avatar: 'assets/images/avatar3.png'
    }
  ];
}
