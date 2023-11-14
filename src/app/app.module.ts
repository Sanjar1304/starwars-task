import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoadingComponent } from './loading/loading.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planets/planet/planet.component';
import { SpeciesComponent } from './species/species.component';
import { SpecieComponent } from './species/specie/specie.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starships/starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    FilmsComponent,
    FilmComponent,
    HomeComponent,
    ListComponent,
    LoadingComponent,
    PlanetsComponent,
    PlanetComponent,
    SpeciesComponent,
    SpecieComponent,
    StarshipsComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
