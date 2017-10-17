import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GitService } from './git.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
