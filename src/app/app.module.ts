import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './players/player/player.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { TeamDescriptionComponent } from './team-description/team-description.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PlayersComponent,
    PlayerComponent,
    TopBannerComponent,
    TeamDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
