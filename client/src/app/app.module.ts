import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tache } from './domain/tache';
import { TacheService } from './service/tache.service';

@NgModule({
  declarations: [
    AppComponent,
    Tache
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
