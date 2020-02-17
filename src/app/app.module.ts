import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReleasesComponent } from './releases/releases.component';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './shared/cards/cards.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomSeguroPipe } from './pipes/domseguro.pipe';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ArtistaComponent } from './artista/artista.component';

export const ROUTES: Routes = [
  { path: 'lanzamientos', component: ReleasesComponent, children: [
    {
      path: 'lanzamientos',
      component: ReleasesComponent
    }
  ]},
  { path: '', pathMatch: 'full', redirectTo: 'lanzamientos' },
  // { path: '**', pathMatch: 'full', redirectTo: 'lanzamientos' },
  { path: 'artist/:id', component: ArtistaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReleasesComponent,
    CardsComponent,
    LoadingComponent,
    NoimagePipe,
    DomSeguroPipe,
    NavbarComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
