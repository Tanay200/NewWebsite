import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {

  constructor(private httpClient : HttpClient) { }

  getHeadlines():Observable<any>{
    return this.httpClient.get("assets/JSON/news.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english");
  }
}
