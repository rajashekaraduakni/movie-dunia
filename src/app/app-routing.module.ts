import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LyricsListComponent } from './lyrics/lyrics-list/lyrics-list.component';
import { LyricDetailsComponent } from './lyrics/lyric-details/lyric-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lyrics',
    component: LyricsListComponent
  },
   {
    path: 'Lyric/:id',
    component: LyricDetailsComponent
  }
  // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
