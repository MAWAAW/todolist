import { Injectable } from '@angular/core';
import { Tache } from '../domain/tache';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  taches: BehaviorSubject<Tache[]> = new BehaviorSubject([]);

  constructor() { 
    this.listerTaches();
  }

  listerTaches(): Observable<Tache[]> {
    return this.taches.asObservable()
  }
}
