import { Component } from '@angular/core';
import { ReadService } from '../read.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articleRead.component.html',
  styleUrls: ['./articleRead.component.css']
})
export class ArticleRead {

  constructor(public readService: ReadService) {}

}