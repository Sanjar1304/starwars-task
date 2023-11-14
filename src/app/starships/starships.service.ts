import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

import { getHost, getId } from '../shared/functions';


export interface Starship {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  filmIds: number[];
  films: string[];
  hyperdrive_rating: string;
  id: number;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  MGLT: string;
  model: string;
  name: string;
  passengers: string;
  pilotIds: number[];
  pilots: string[]
  starship_class: string;
  url: string;
}

interface StarshipsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor() { }
}
