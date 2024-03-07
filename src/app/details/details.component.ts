import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../Article';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="article?.photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{article?.title}}</h2>
      <p class="listing-location">{{article?.author}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this article</h2>
      <h3>{{article?.title}}</h3>
      <p>{{article?.article}}</p>
    </section>
  </article>
`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  articleService = inject(ArticleService);
  article: Article | undefined;

  constructor() {
    const articleId = parseInt(this.route.snapshot.params['id'], 10);
    this.articleService.getArticleById(articleId).then((article: Article | undefined) => {
      this.article = article;
    });
  }

}