import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class LyricslistService {


 
//private _Lyricsurl: string = 'assets/api/100.json';
private _Lyricsurl: string  ="http://myewalletsfykxuhqe9y.devcloud.acquia-sites.com/albums/latest_albums/100.json";

  constructor(private _http:Http ) { }

	getLyrics() {
	    return this._http.get(this._Lyricsurl).map((response: Response) => response.json())
	        //.do(data => console.log(data))
	        .catch(this.handleError);
	  }
	    private handleError(error: Response) {
	   // console.error(error);
	    let message = `Error status code ${error.status} at ${error.url}`;
	    return Observable.throw(message);
	  }

 
}
