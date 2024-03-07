import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../Article';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="article.photo">
    <h2 class="listing-heading">{{ article.title }}</h2>
    <p class="listing-location">{{ article.author}}</p>
    <a [routerLink]="['/details', article.id]">Learn More</a>
  </section>
  `,
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() article!: Article;
}
