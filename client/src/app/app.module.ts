import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheService } from './service/tache.service';
import { AllTachesComponent } from './all-taches/all-taches.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTachesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
