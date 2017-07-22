import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'; 


@Injectable()
export class SearchService {

 
private _searchLyricurl: string = 'assets/api/100.json';
//private _searchLyricurl: string  ="http://myewalletsfykxuhqe9y.devcloud.acquia-sites.com/albums/latest_albums/100.json";

  constructor(private _http:Http) { }

  searchLyricsList(searchLyric:string){
    return this._http.get(this._searchLyricurl).map((response: Response) => response.json())
  }
}
