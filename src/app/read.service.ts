import { Injectable } from '@angular/core';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  articles: Article[] = [];
 
  add(article: Article) {
    this.articles.push(article);
  }

  clear() {
    this.articles = [];
  }
}
