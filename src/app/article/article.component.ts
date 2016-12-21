import {Component, OnInit, Input} from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'raw'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10);
  }

  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }



  ngOnInit() {
  }

}


