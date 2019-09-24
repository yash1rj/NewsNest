import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '1251bc941487c14c5780fa561caea92ac990';

  constructor(private http: HttpClient) { }

  getSources() {
    console.log("Getting News Resources");
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  getArticles() {
    console.log("Getting Articles");
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticlesById(source: String) {
    console.log("Getting Specific Articles");
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
