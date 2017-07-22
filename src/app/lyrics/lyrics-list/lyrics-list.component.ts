import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { LyricslistService } from '../../services/lyrics-list/lyricslist.service';


@Component({
  selector: 'app-lyrics-list',
  templateUrl: './lyrics-list.component.html',
  styleUrls: ['./lyrics-list.component.css'],
  providers:[LyricslistService]
})
export class LyricsListComponent implements OnInit {
	 lyrics: Array<object>;
   errorMessage: string;
  
  constructor(private route: ActivatedRoute, private _lyricslistService : LyricslistService) {
     
   }

  ngOnInit() {
    this.getLyrics()
  }

 getLyrics() {
   this._lyricslistService.getLyrics().subscribe(
      lyrics => {this.lyrics = lyrics} ,
       error => {this.errorMessage = <any>error}
    );

}

}
