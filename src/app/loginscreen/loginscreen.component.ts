import { Component, OnInit } from '@angular/core';
import { SharedfunctionsService } from '../sharedfunctions.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  constructor(private service : SharedfunctionsService) { }

  public auth:boolean;

  ngOnInit(): void {
    this.service.PageState = 0;
    this.service.topic = "stars";
    if(this.service.token != ""){
      this.auth = true;
    }
  }
}
