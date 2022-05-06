import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; // pagina dos poligonos
import { DocumentationComponent } from "./pages/documentation/documentation.component"; //pagina sobre documentos
import { HabitationComponent } from './pages/habitation/habitation.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'docs', component:DocumentationComponent},
  {path:'habit',component:HabitationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
