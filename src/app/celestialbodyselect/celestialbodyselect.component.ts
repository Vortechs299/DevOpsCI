import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SharedfunctionsService } from '../sharedfunctions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-celestialbodyselect',
  templateUrl: './celestialbodyselect.component.html',
  styleUrls: ['./celestialbodyselect.component.css']
})
export class CelestialbodyselectComponent implements OnInit {

  constructor(private service : SharedfunctionsService, private router: Router) { }

  public items = [];
  public SelectableImages = [];

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    if(this.service.PageState == 0){
      this.service.GETAllStars().subscribe(data => {
        this.items = data;
        console.log(data);
        this.GetSelectable();
      });
    }
    if(this.service.PageState == 1){
      this.service.GETAllPlanetsFromStar().subscribe(data => {
        this.items = data;
        console.log(data);
        this.GetSelectable();
      });
    }
    if(this.service.PageState == 2){
      this.service.GETAllMoonsFromPlanet().subscribe(data => {
        this.items = data;
        console.log(data);
        this.GetSelectable();
      });
    }
  }

  GetSelectable(){
    this.SelectableImages = [];
    for (var i = 0; i < this.items[0].length; i++) {
      this.SelectableImages.push(this.items[0][i].imageURLs[0].url);
    }
  }

  GetSelectableName(i){
    return this.items[0][i].name;
  }

  SetStatsPageContent(i){
    this.service.StatsPageContent = this.items[0][i].name;
    this.service.PageState += 1;
    if(this.service.PageState == 2){
      this.service.hostid = this.items[0][i].planetId
    }
    this.initialize();
    this.service.SendMessage("notify");
  }
}
