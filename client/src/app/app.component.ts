import { Component, OnInit } from '@angular/core';
import { Tache } from './domain/tache';
import { TacheService } from './service/tache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  taches: Tache[] = [];

  constructor(private tacheService: TacheService) {
  }
  ngOnInit(): void {
    this.tacheService.listerTaches().subscribe(taches => {
      this.taches = taches
    })
  }
}
