import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Character, CharactersService } from '../characters.service';
import { Planet, PlanetsService } from '../../planets/planets.service';
import { Vehicle, VehiclesService } from '../../vehicles/vehicles.service';


interface CharacterData extends Character {
  homeworldData: Planet;
  vehiclesData: Vehicle[];
}


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character$!: Observable<CharacterData>;

  constructor(
    private charactersSvc: CharactersService,
    private planetsSvc: PlanetsService,
    private route: ActivatedRoute,
    private vehiclesSvc: VehiclesService
  ) { }

  ngOnInit(): void {
    this.character$ = this.route
      .paramMap
      .pipe(
        //@ts-ignore
        tap(params => this.charactersSvc.changeCharacter(+params.get('id'))),
        switchMap(() => combineLatest([
          this.charactersSvc.character$,
          //@ts-ignore
          this.planetsSvc.planets$,
          //@ts-ignore
          this.vehiclesSvc.vehicles$
        ]).pipe(
          //@ts-ignore
          map(([character, planets, vehicles]) => {
            return {
              ...character,
              //@ts-ignore
              homeworldData: planets.find(planet => character.homeworldId === planet.id),
              //@ts-ignore
              vehiclesData: vehicles.filter(vehicle => character.vehicleIds.includes(vehicle.id))
            }
          })
        ))
      );
  }

}
