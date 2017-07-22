import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import {PageSliderModule}    from 'ng2-page-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyricsListComponent } from './lyrics/lyrics-list/lyrics-list.component';
import { LyricDetailsComponent } from './lyrics/lyric-details/lyric-details.component';
import { LyricslistService } from './services/lyrics-list/lyricslist.service';
import { LyricsComponent } from './banners/lyrics/lyrics.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LyricsListComponent,
    LyricDetailsComponent,
    LyricsComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    PageSliderModule,
    FormsModule,
    MaterializeModule.forRoot()
  ],
  providers: [LyricslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
