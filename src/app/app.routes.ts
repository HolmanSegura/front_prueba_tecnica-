import { Routes } from '@angular/router';
import { DocumentoComponent } from './documento/documento.component'; 
import { TodosComponent } from './todos/todos.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'documento', pathMatch: 'full' },
  { path: 'consulta', component: DocumentoComponent },
  { path: 'todos', component: TodosComponent }
];

