import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; // pagina dos poligonos
import { DocumentationComponent } from "./pages/documentation/documentation.component"; //pagina sobre documentos
import { HabitationComponent } from './pages/habitation/habitation.component';
import { EducationComponent } from "./pages/education/education.component";
import { FormComponent } from "./pages/form/form.component";
import { HealthComponent } from "./pages/health/health.component";
import { JobsComponent } from "./pages/jobs/jobs.component";
import { UndefinedPageComponent } from "./pages/undefined-page/undefined-page.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'docs', component:DocumentationComponent},
  {path:'habit',component:HabitationComponent},

  {path:'educ',component:EducationComponent},
  {path:'form',component:FormComponent},
  {path:'health',component:HealthComponent},
  {path:'job',component:JobsComponent},
  {path:'undf',component:UndefinedPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
