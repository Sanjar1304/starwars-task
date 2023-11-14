import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

import { getHost, getId } from '../shared/functions';

export interface Specie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  filmIds: number[];
  films: string[];
  hair_colors: string;
  homeworldId: number;
  homeworld: string;
  id: number;
  language: string;
  name: string;
  peopleIds: number[];
  people: string[];
  skin_colors: string;
  url: string;
}

interface SpeciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Specie[];
}



@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor() { }
}
