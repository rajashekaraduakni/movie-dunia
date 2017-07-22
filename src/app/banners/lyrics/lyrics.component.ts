import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

    public pageNumber : number = 0;
    public pageCount : number = 0;
    public pages = [
        
         {
          image: "https://in.bmscdn.com/showcaseimage/eventtrailer/jagga-jasoos-movie-showcase-23-06-2017-20-16.jpg",
          title: "movie title"
       },
       {
          image: "https://in.bmscdn.com/showcaseimage/eventtrailer/war-for-the-planet-of-the-apes-movie-showcase-22-06-2017-20-28.jpg",
          title: "War for the Planet of the appes",
        },
       
        {
          image: "https://in.bmscdn.com/showcaseimage/eventtrailer/jab-harry-met-sejal-movie-page-showcase-21-26-june-21-06-2017-20-37.jpg",
          title: "movie title"
        },
        {
          image: "https://in.bmscdn.com/showcaseimage/eventtrailer/spider-man-homecoming-movie-showcase-23-06-2017-20-27.jpg",
          title: "movie title"
       }  
    ];
// public pageNumber: number = 0;
//   public pageCount: number = 0;

//   public pages = [
//     {
//       title: "About the Company",
//       color: "red"
//     },
//     {
//       title: "A Mission Statement",
//       color: "green"
//     },
//     {
//       title: "Diversity!",
//       color: "seagreen"
//     },
//     {
//       title: "World-class Business Things",
//       color: "blue"
//     },
//     {
//       title: "Ideas! Do You Have Any?",
//       color: "purple"
//     },
//     {
//       title: "Leaders In A Field Maybe?",
//       color: "maroon"
//     },
//     {
//       title: "We Have Lawyers",
//       color: "orange"
//     }
//   ]


  constructor() { }

  ngOnInit() {
  }

}
