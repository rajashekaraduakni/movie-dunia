import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class LyricDetailsService {

 //private _Lyricurl: string = 'assets/api/181.json';
private _Lyricurl: string  ="http://myewalletsfykxuhqe9y.devcloud.acquia-sites.com/albums/latest_albums/100.json?callback=JSON_CALLBACK";


   constructor(private _http:Http) { }

   getLyricDetails(id:string){
	return this._http.get(this._Lyricurl).map(res => res.json());
	}
 		 

}
