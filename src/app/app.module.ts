import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiheroesService } from './services/apiheroes.service';
import { LocalheroesStorageService } from './services/localheroes-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppPipesModule } from './app-pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPipesModule
  ],
  providers: [ApiheroesService, LocalheroesStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
