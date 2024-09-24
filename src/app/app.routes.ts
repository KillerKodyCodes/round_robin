import { Routes } from '@angular/router';
import { AddParticipantsComponent } from './components/add-participants/add-participants.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-participants',
    component: AddParticipantsComponent
  }
];
