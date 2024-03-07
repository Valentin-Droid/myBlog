import { Injectable } from '@angular/core';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = 'http://localhost:3000/articles';

  async getAllArticles(): Promise<Article[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getArticleById(id: number): Promise<Article | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}