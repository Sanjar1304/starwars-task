import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

import { getHost, getId } from '../shared/functions';

export interface Film {
  characterIds: number[];
  characters: string[];
  director: string;
  episode_id: string;
  id: number;
  opening_crawl: string;
  planetIds: number[];
  planets: string[];
  producer: string;
  title: string;
  release_date: string;
  speciesIds: number[];
  species: string[];
  starshipIds: number[];
  starships: string[];
  url: string;
  vehicleIds: number[];
  vehicles: string[];
}

interface FilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}



@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }
}
