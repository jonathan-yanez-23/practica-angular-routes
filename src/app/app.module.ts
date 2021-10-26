import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiheroesService } from './apiheroes.service';
import { LocalheroesStorageService } from './localheroes-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiheroesService, LocalheroesStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
