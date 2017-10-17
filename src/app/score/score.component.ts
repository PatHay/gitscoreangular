import { Component, OnInit } from '@angular/core';
import { GitService } from './../git.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  check;
  userExists = null;
  user;
  handle = [];
  score;
  toomanyinq = null;
  
  constructor(private _gitService: GitService) {}
  

  onSubmit(){
    this.check = this._gitService.retrieveGit(this.user, (handle) => {
      if(handle['status'] > 400 && handle['status'] != 403){
        // console.log("This user does not exist");
        this.userExists=false;
        this.user='';
      } else if(handle['status'] == 403){
        console.log("Too many inquiries, try again later!");
        this.toomanyinq = true;
      } else {
        this.handle = handle;
        // console.log(this.handle['public_repos']);
        this.score = this.handle['public_repos'];
        this.userExists=true;
        this.user='';
        this.toomanyinq = null;
      }

    });

  }

  ngOnInit() {
  }

}
