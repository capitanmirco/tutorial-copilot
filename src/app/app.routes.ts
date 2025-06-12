import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ExamplesComponent } from './features/examples/examples.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'examples', component: ExamplesComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
