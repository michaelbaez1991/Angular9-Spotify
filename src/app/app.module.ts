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
import { BackendJavaComponent } from './backend-java/backend-java.component';
import { ReadComponent } from './Crud/read/read.component';
import { AddComponent } from './Crud/add/add.component';
import { UpdateComponent } from './Crud/update/update.component';
import { FormsModule } from '@angular/forms';
import { CrudJavaService } from '../app/services/crud-java.service';
import { SearchComponent } from './search/search.component';

export const ROUTES: Routes = [
  { path: 'lanzamientos', component: ReleasesComponent, children: [
    {
      path: 'lanzamientos',
      component: ReleasesComponent
    }
  ]},
  { path: '', pathMatch: 'full', redirectTo: 'lanzamientos' },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: 'BackendJava', component: BackendJavaComponent, children: [
      { path: 'listar', component: ReadComponent },
      { path: 'agregar', component: AddComponent },
      { path: 'editar', component: UpdateComponent },
      { path: 'buscar', component: SearchComponent },
    ]
  },
  { path: 'BackendJava/listar', component: ReadComponent },
  { path: 'BackendJava/agregar', component: AddComponent },
  { path: 'BackendJava/editar', component: UpdateComponent },
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
    ArtistaComponent,
    BackendJavaComponent,
    ReadComponent,
    AddComponent,
    UpdateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [CrudJavaService],
  bootstrap: [AppComponent]
})

export class AppModule { }
