import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router"
import { SharedfunctionsService } from '../sharedfunctions.service';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
})
export class TopbannerComponent implements OnInit {

  constructor(private service : SharedfunctionsService) { }

  //@ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  auth2:any;
  public auth:boolean = false;

  ngOnInit() {
    //this.googleInitialize();
    //if(this.service.token != ""){
    //  this.auth = true;
    //}
  }

  ResetPages(){
    this.service.StatsPageContent = "";
    this.service.topic = "";
    this.service.PageState = -1;
    this.service.hostid = 0;
  }
/*
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '581607696602-kl8g7jpch4psgbgaffi98gvif5tva1f4.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        this.service.token = googleUser.getAuthResponse().id_token;
        this.service.account = profile.getEmail();
        this.service.name =  profile.getName();

        if(this.service.token != null){
          let element: HTMLElement = document.getElementById('id') as HTMLElement;
          element.click();
        }

        console.log(this.service.name);
        console.log('Email: ' + profile.getEmail());
        console.log('Token: ' + googleUser.getAuthResponse().id_token);

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
*/
}
