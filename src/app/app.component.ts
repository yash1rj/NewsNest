import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
  }

  ngOnInit() {
    //load articles
    this.newsapi.getArticles().subscribe(data => this.mArticles = data["articles"]);

    //load news sources
    this.newsapi.getSources().subscribe(data => this.mSources = data["sources"]);

  }

  searchArticles(source){
		console.log("selected source is: "+source);
		this.newsapi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
	}
}
