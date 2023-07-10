import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {

  darkMode: boolean = false;

  constructor(private httpClient : HttpClient) { }

  getHeadlines():Observable<any>{
    return this.httpClient.get("assets/JSON/news.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english");
  }

  getPoliticalNews():Observable<any>{
    return this.httpClient.get("assets/JSON/politics.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english_politics");

  }

  getBusiness():Observable<any>{
    return this.httpClient.get("assets/JSON/business.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english_business");

  }

  getCricketNews():Observable<any>{
    return this.httpClient.get("assets/JSON/cricket.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english_cricket");

  }

  getEntertainmentNews():Observable<any>{
    return this.httpClient.get("assets/JSON/entertainment.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english_entertainment");

  }

  getWorldNews():Observable<any>{
    return this.httpClient.get("assets/JSON/world.json");
    // return this.httpClient.get("https://newsapi.in/newsapi/news.php?key=WBh12EhlrRBbMwKfIB16sqQ7objzDc&category=india_english_world");

  }
}
