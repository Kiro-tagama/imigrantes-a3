import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { PolygonComponent } from './home/polygon/polygon.component';

// pages

  // documentos
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { RneComponent } from './pages/documentation/list/rne/rne.component';
import { CpfComponent } from './pages/documentation/list/cpf/cpf.component';
import { CtpsComponent } from './pages/documentation/list/ctps/ctps.component';
import { PeComponent } from './pages/documentation/list/pe/pe.component';
import { CnhComponent } from './pages/documentation/list/cnh/cnh.component';
import { RpComponent } from './pages/documentation/list/rp/rp.component';

  // habit
import { HabitationComponent } from './pages/habitation/habitation.component';

  //outros
import { EducationComponent } from './pages/education/education.component';
import { HealthComponent } from './pages/health/health.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { UndefinedPageComponent } from './pages/undefined-page/undefined-page.component';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolygonComponent,
    DocumentationComponent,
    HabitationComponent,
    EducationComponent,
    HealthComponent,
    JobsComponent,
    UndefinedPageComponent,
    FormComponent,
    RneComponent,
    CpfComponent,
    CtpsComponent,
    PeComponent,
    CnhComponent,
    RpComponent,
  ],
  imports: [
    NgForm,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule
    // MatDrawerContainer,
    // MatDrawer,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
