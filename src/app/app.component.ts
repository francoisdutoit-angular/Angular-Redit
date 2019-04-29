import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this

// selector: 'app-root',
// The component is applied to the <app-root></app-root> tag in your index.html. If your index.html doesn't have that 
// tag Angular will fail at startup. You can control where you Angular application will be played.
// This is special for the Angular component that is created using bootstrap(AppComponent)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

   articles: Article[]; 

   constructor() { 

    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];

  }

    addArticle(title: HTMLInputElement,link: HTMLInputElement): boolean{

      console.log(`Adding article title: ${title.value} and link: ${link.value}`);  
      this.articles.push(new Article(title.value, link.value, 0));  
      
      title.value = ''; 
      link.value = '';

      return false;
  }

  sortedArticles(): Article[] { 
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes); 
  }

}
