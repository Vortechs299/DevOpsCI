import { Component, OnInit } from '@angular/core';
import { SharedfunctionsService } from '../sharedfunctions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service : SharedfunctionsService) { }

  public Operator:string = "DELETE";
  public BodyType:string = "stars";
  public ID:string;
  public item:string = "";
  public response:string = "";

  public PreviousOperator:string = "";
  public showPOSTfrom:boolean;
  public auth:boolean;

  ngOnInit(): void {
    if(this.service.token != ""){
      this.auth = true;
    }
  }

  UpdateView(r){
    switch(r){
      case "DELETE":
        this.Operator = r;
        break;
      case "POST":
        this.Operator = r;
        break;
      case "PUT":
        this.Operator = r;
        break;
      case "stars":
        this.BodyType = r;
        break;
      case "planets":
        this.BodyType = r;
        break;
      case "moons":
        this.BodyType = r;
        break;
      case "anomalies":
        this.BodyType = r;
        break;
    }
    if(this.Operator == "DELETE"){
      this.showPOSTfrom = false;
    }else{
      this.showPOSTfrom = true;
    }
    if(r != this.PreviousOperator){
      this.GetFormatExample()
      this.PreviousOperator = r;
    }
    
  }
  GetFormatExample(){
    this.service.GetEditExample(this.BodyType).subscribe(data => {
      this.item = JSON.stringify(data[0][0], null, 2);
    });
  }

  ExecuteOperation(){
    switch(this.Operator){
      case "DELETE":
        this.service.DELETE(this.BodyType, this.ID).subscribe({
          next: data => {
              this.response = 'Delete successful';
          },
          error: error => {
              this.response = error.message + '\n\n object not found';
          }
        });
        break;
      case "POST":
        this.service.POST(this.BodyType, JSON.parse(this.item)).subscribe({
          next: data => {
              this.response = 'POST successful\n\n' + JSON.stringify(data, null, 2);
          },
          error: error => {
              this.response = error.message + '\n\n' + JSON.stringify(error.error.errors, null, 2);
          }
        });
        break;
      case "PUT":
        this.service.PUT(this.BodyType,this.ID, JSON.parse(this.item)).subscribe({
          next: data => {
              this.response = 'PUT successful\n\n' + JSON.stringify(data, null, 2);
          },
          error: error => {
              this.response = error.message + '\n\n' + JSON.stringify(error.error.errors, null, 2);
          }
        });
        break;
    }
  }

  

}




//get one object (length) based on value