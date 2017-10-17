import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GitService {
  username = [];
  constructor(private _http: Http) { }

  retrieveGit(handle: string, callback){
    this._http.get('https://api.github.com/users/'+handle).subscribe(  //for post, this._http.post(url, data), data is the json parameter
    (response) => {
      this.username = response.json();
      callback(this.username);
    },
    (error) => {
      console.log(error);
      callback(error);
    }
    );
  }

}
