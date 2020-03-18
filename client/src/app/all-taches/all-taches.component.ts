import { Component, OnInit } from '@angular/core';
import { Tache } from '../shared/domain/tache';
import { TacheService } from '../shared/service/tache.service';
import { TacheService } from '../service/tache.service';

@Component({
  selector: 'app-all-taches',
  templateUrl: './all-taches.component.html',
  styleUrls: ['./all-taches.component.css']
})
export class AllTachesComponent implements OnInit {

  taches: Tache[] = [];
  limit: number;
  tache: Tache;
  filter: string;

  constructor(private tacheService: TacheService) { }

  ngOnInit(): void {
    this.tacheService.listerCollegues().subscribe(taches =>
      this.taches = taches)
  }

}
