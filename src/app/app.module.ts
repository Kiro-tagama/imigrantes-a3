import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatDrawer,MatDrawerContainer } from '@angular/material/sidenav/drawer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PolygonComponent } from './home/polygon/polygon.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { HabitationComponent } from './pages/habitation/habitation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    // MatDrawerContainer,
    // MatDrawer,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
