import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { ArticleRead } from '../articleRead/articleRead.component';
import { Article } from '../Article';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleComponent, ArticleRead],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  filteredArticleList: Article[] = [];

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.filteredArticleList = this.searchService.filteredArticleList;
  }

}
