import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'PUT_YOUR_API_KEY_HERE';

  constructor(private http: HttpClient) { }

  getSources() {
    console.log("Getting News Resources");
  }

  getArticles() {
    console.log("Getting Articles");
  }

  getArticlesById() {
    console.log("Getting Specific Articles");
  }
}
