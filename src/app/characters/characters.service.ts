import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

import { getHost, getId } from '../shared/functions';

export interface Character {
  birth_year: string;
  eye_color: string;
  filmIds: number[];
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  homeworldId: number;
  id: number;
  mass: string;
  name: string;
  skin_color: string;
  speciesIds: number[];
  species: string[];
  starshipIds: number[];
  starships: string[];
  url: string;
  vehicleIds: number[];
  vehicles: string[];
}

interface CharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }
}
