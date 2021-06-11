import { Component, OnInit } from '@angular/core';
import { SharedfunctionsService } from '../sharedfunctions.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor(private service : SharedfunctionsService) { }

  public termitems = [];
  public hubbledata = [];

  ngOnInit(): void {
    this.service.GetSpaceTerms().subscribe( data => {
      this.termitems = data;
      console.log(data);
    });
    this.service.GetHubbleInfo().subscribe( data => {
      this.hubbledata.push(data);
      console.log(this.hubbledata[0].image_files[4].file_url)
    });
  }

}
