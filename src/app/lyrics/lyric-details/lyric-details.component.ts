import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LyricDetailsService } from '../../services/lyric-details/lyric-details.service';
//import { LyricslistService } from '../../services/lyrics-list/lyricslist.service';

@Component({
  selector: 'app-lyric-details',
  templateUrl: './lyric-details.component.html',
  styleUrls: ['./lyric-details.component.css'],
  providers:[LyricDetailsService]
})
export class LyricDetailsComponent implements OnInit {
 
  lyricDetails: Array<object>;

    // public details = [
        
    //      {
    //       image: "https://in.bmscdn.com/showcaseimage/eventtrailer/jagga-jasoos-movie-showcase-23-06-2017-20-16.jpg",
    //       movieName: "movie title gose here",
    //       movieType:'comedy'

    //    }
    // ];


constructor(
  private router:ActivatedRoute, 
  private _LyricDetailsService: LyricDetailsService) { 

}
   

  ngOnInit() {

     this.router.params.subscribe((params) => {
      let id = params['id'];
      this._LyricDetailsService.getLyricDetails(id).subscribe(lyricDetails => {
     //   console.log(lyricDetails)
        this.lyricDetails = lyricDetails;
      })
    });

  }
 

}
