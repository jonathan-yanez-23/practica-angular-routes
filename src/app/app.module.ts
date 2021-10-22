import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiheroesService } from './apiheroes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiheroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
