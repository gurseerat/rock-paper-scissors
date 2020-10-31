import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { PlayComponent } from './play/play.component';
import { ScoreComponent } from './score/score.component';
import { ResultService } from './result.service';
import { Globals } from './globals';
import { ResultCardComponent } from './result-card/result-card.component';
import { GamesRulesPopupComponent } from './games-rules-popup/games-rules-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    PlayComponent,
    ScoreComponent,
    ResultCardComponent,
    GamesRulesPopupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule
  ],
  providers: [
    ResultService,
    Globals
  ],
  entryComponents: [ GamesRulesPopupComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
