import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[SearchService]
})
export class NavComponent implements OnInit {

	searchLyric: string;
	searchRes: Array<object>;

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
  }

  searchLyrics(){
  	this._searchService.searchLyricsList(this.searchLyric).subscribe(searchRes => {
  		this.searchRes = searchRes;
  		//console.log(searchRes);
  	})
  }
 
}
