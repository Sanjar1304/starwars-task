import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, combineLatest, EMPTY, Observable } from 'rxjs';
import { expand, map, reduce, shareReplay } from 'rxjs/operators';

import { getHost, getId } from '../shared/functions';


export interface Vehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  filmIds: number[];
  films: string[];
  id: number;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilotIds: number[];
  pilots: string[];
  url: string;
  vehicle_class: string;
}

interface VehiclesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vehicle[];
}

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }
}
