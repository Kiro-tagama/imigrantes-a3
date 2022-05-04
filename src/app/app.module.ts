import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatDrawer,MatDrawerContainer } from '@angular/material/sidenav/drawer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { PolygonComponent } from './home/polygon/polygon.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { HabitationComponent } from './pages/habitation/habitation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    PolygonComponent,
    DocumentationComponent,
    HabitationComponent,
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
