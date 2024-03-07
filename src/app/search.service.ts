import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Article } from './Article';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  articleList: Article[] = [];
  filteredArticleList: Article[] = [];
  articleService = inject(ArticleService);

  constructor() {
    this.articleService.getAllArticles().then((articleList: Article[]) => {
      this.articleList = articleList;
      this.filteredArticleList = articleList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredArticleList = this.articleList;
      return;
    }
  
    this.filteredArticleList = this.articleList.filter(
      article => article?.author.toLowerCase().includes(text.toLowerCase())
    );
  }
}
