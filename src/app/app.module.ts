import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsGameComponent } from './rps-game/rps-game.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { HealthBarComponent } from './health-bar/health-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsGameComponent,
    ProfilePicComponent,
    HealthBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
