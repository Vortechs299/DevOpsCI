import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import { CelestialBody } from './models/CelestialBody';

@Injectable({
  providedIn: 'root'
})
export class SharedfunctionsService implements OnInit{

  private MessageSource = new Subject<String>();
  MessageSource$ = this.MessageSource.asObservable();

  constructor(private http: HttpClient) { }

  public routes:any = [];
  public data:any = [];
  public account; //email
  public token:string = "faketoken";   //token
  public name:string;
  public StatsPageContent:string = "";
  public topic:string = "";
  public PageState:number = -1;
  public hostid:number = 0;
  public apiURL:string = "https://localhost:44331/api/v1/";

  ngOnInit(): void {              //make specific routes for every controller, no hypermedia required 
  }

  SendMessage(message:string){
    this.MessageSource.next(message);
  }

  GETAllStars(): Observable<any[]>{
    this.data = this.http.get<any[]>(this.apiURL + 'stars/all');
    return this.data;                                     
  }
  GETAllPlanetsFromStar(): Observable<any[]>{
    this.data = this.http.get<any[]>(this.apiURL + 'planets?starid=' + this.hostid);
    return this.data;
  }
  GETAllMoonsFromPlanet(): Observable<any[]>{
    this.data = this.http.get<any[]>(this.apiURL + 'moons?planetid='+ this.hostid);
    return this.data;
  }
  GetOneBodyByName(controller:string): Observable<any[]>{
    this.data = this.http.get<any[]>(this.apiURL + controller + '?name=' + this.StatsPageContent);
    return this.data;
  }
  GetAnomaly(): Observable<any[]>{
    this.data = this.http.get<any[]>(this.apiURL + 'anomalies/all');
    return this.data;
  }
  GetEditExample(BodyType): Observable<any[]>{
    this.data = this.http.get<any[]>(this.apiURL + BodyType);
    return this.data;
  }
  DELETE(controller:string, id:string): Observable<any[]>{
    const headers = { 'Authorization': 'Bearer ' + this.token};
    return this.http.delete<any[]>(this.apiURL + controller + '/' + id, { headers });                                  
  }
  POST(controller:string, body:string) {
    const headers = { 'Authorization': 'Bearer ' + this.token};
    return this.http.post<any[]>(this.apiURL + controller, body, { headers });                                  
  }
  PUT(controller:string, id:string, body:JSON) {
    const headers = { 'Authorization': 'Bearer ' + this.token};
    return this.http.put<any[]>(this.apiURL + controller + '/' + id, body, { headers });                                  
  }
  //////////////////////////External API/////////////////////////////
  GetSpaceTerms(): Observable<any[]>{
    return this.http.get<any[]>('https://hubblesite.org/api/v3/glossary?page=all');                                 
  }
  GetHubbleInfo(): Observable<any[]>{
    return this.http.get<any[]>('https://hubblesite.org/api/v3/image/1');
  }
}















