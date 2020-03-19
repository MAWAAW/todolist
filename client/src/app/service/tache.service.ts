import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tache } from '../domain/tache';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  taches: BehaviorSubject<Tache[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { 
    this.refreshData();
  }

  refreshData() {
    this.http.get<Tache[]>('http://localhost:8080/taches')
      .subscribe(taches => { this.taches.next(taches) })
  }

  listerTaches(): Observable<Tache[]> {
    return this.taches.asObservable()
  }
}
