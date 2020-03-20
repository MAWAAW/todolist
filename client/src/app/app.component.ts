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
    console.log("constructor AppComponent");
  }
  ngOnInit(): void {
    console.log("ngOnInit AppComponent !!!");
    this.tacheService.listerTaches().subscribe(taches => {
      console.log("type of taches = ", typeof(taches))
      this.taches = taches;
    })
  }
}
