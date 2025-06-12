import { Component, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

interface CodeExample {
  id: number;
  title: string;
  description: string;
  code: string;
  language: string;
}

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {
  selectedTab = 'tab1';
  
  constructor(private sanitizer: DomSanitizer) {}
  
  codeExamples: CodeExample[] = [
    {
      id: 1,
      title: 'Funzione di ordinamento array',
      description: 'Un esempio di come Copilot può aiutarti a scrivere funzioni di ordinamento personalizzate',      code: `function sortArrayByProperty(array, property, direction = 'asc') {
  return [...array].sort((a, b) => {
    if (direction === 'asc') {
      return a[property] &gt; b[property] ? 1 : -1;
    } else {
      return a[property] &lt; b[property] ? 1 : -1;
    }
  });
}`,
      language: 'javascript'
    },
    {
      id: 2,
      title: 'Componente Angular con HTTP',
      description: 'Esempio di un componente Angular che utilizza HttpClient per recuperare dati da una API',      code: `import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  template: '&lt;div *ngIf="loading"&gt;Loading...&lt;/div&gt;' +
    '&lt;ul *ngIf="!loading"&gt;' +
    '  &lt;li *ngFor="let user of users"&gt;' +
    '    {{ user.name }} ({{ user.email }})' +
    '  &lt;/li&gt;' +
    '&lt;/ul&gt;'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get&lt;User[]&gt;('https://api.example.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching users', error);
          this.loading = false;
        }
      });
  }
}`,
      language: 'typescript'
    },
    {
      id: 3,
      title: 'Stile CSS responsive',
      description: 'Un esempio di CSS per creare un layout responsive con media queries',      code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}`,
      language: 'css'
    }
  ];

  selectedExample = this.codeExamples[0];

  selectExample(example: CodeExample) {
    this.selectedExample = example;
  }
}
