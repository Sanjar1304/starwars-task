import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

import { getHost, getId } from '../shared/functions';

export interface Planet {
  climate: string;
  diameter: string;
  filmIds: number[];
  films: string[];
  gravity: string;
  id: number;
  name: string;
  orbital_period: string;
  population: string;
  residentIds: number[];
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor() { }
}
