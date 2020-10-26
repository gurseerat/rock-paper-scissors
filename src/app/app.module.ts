import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { PlayComponent } from './play/play.component';
import { ScoreComponent } from './score/score.component';
import { ResultService } from './result.service';
import { Globals } from './globals';
import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    PlayComponent,
    ScoreComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ResultService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
