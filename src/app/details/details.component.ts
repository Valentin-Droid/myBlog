import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../Article';
import { ReadService } from '../read.service';

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
    <button class="go-back-button" (click)="goBack()">go back</button>
  </article>
`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  articleService = inject(ArticleService);
  article: Article | undefined;

  constructor(private location: Location, private readService: ReadService) {
    const articleId = parseInt(this.route.snapshot.params['id'], 10);
    this.articleService.getArticleById(articleId).then((article: Article | undefined) => {
      if (article) {
        this.article = article;
        this.readService.add(article);
      } else {
        // Gérer le cas où l'article est introuvable
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}