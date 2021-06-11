import { Component, OnInit, OnChanges } from '@angular/core';
import { SharedfunctionsService } from '../sharedfunctions.service';

@Component({
  selector: 'app-statspage',
  templateUrl: './statspage.component.html',
  styleUrls: ['./statspage.component.css']
})
export class StatspageComponent implements OnInit{

  constructor(private service : SharedfunctionsService) { }

  public auth:boolean;
  public celestialimage:string = "";
  public items:any = [];
  public CelestialObject = [];
  public anomalies = [];
  public datamtm = [];

  ngOnInit(): void {
    this.InitComponent();
    this.service.MessageSource$.subscribe(
      message => {
        this.InitComponent();
      });
  }

  InitComponent(){
    switch(this.service.PageState){
      case 0:
        this.service.topic = "stars";
        break;
      case 1:
        this.service.topic = "stars";
        break;
      case 2:
        this.service.topic = "planets";
        break;
      case 3:
        this.service.topic = "moons";
        break;
    }
        
    if(this.service.token != ""){
      this.auth = true;
    }

    this.service.GetOneBodyByName(this.service.topic).subscribe(data => {
      this.items = data[0][0];
      this.StarObjectSplicer();
    });

    this.service.GetAnomaly().subscribe(data => {     //gets all anomalies. filter out those that are for current object (StatsPageContent)
      this.datamtm = data[0];
      console.log(this.datamtm);
      this.AnomalyDataScraper(this.datamtm);
    });
  }

  AnomalyDataScraper(d){
    for(let i=0;i<d.length;i++){
      for(let j=0;j<d[i].anomalyLocations.length;j++){
        if(d[i].anomalyLocations[j].bodyName == this.service.StatsPageContent){
          if(this.anomalies[0] == null){
            this.anomalies.push(d[i]);
          }
          this.anomalies.push(d[i]);
        }
      }
    }
    console.log(this.anomalies)
  }

  StarObjectSplicer(){
    this.CelestialObject = Object.entries(this.items);
    if(this.service.topic == "stars"){
      this.CelestialObject.splice(0,1);
      this.CelestialObject.splice(1,3);
      this.CelestialObject.splice(17,1);
    }
    else if(this.service.topic == "planets"){
      this.CelestialObject.splice(0,1);
      this.CelestialObject.splice(2,4);
      this.CelestialObject.splice(26,1);
    }
    else if(this.service.topic == "moons"){
      this.CelestialObject.splice(0,1);
      this.CelestialObject.splice(2,3);
    }
      for(let i=0;i<this.CelestialObject.length;i++){
        this.CelestialObject[i][0] = this.CelestialObject[i][0].replace('_', ' ').replace('_', ' ');
      }
  }
}