import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  //The CSS class we want to apply to the "host" of this component.
  @HostBinding('attr.class') cssClass = 'row';

  @Input() article : Article;

  // article is populated by the Input now, 20 // so we don't need anything here
  constructor() { }

  voteUp(){
    this.article.voteUp();

    //say “don’t propagate the event” - this is a 
    //view-specific piece of logic and we shouldn’t allow the Article model’s voteUp() function
    return false;
  }

  voteDown(){
    this.article.voteDown();

    //say “don’t propagate the event” - this is a 
    //view-specific piece of logic and we shouldn’t allow the Article model’s vote() function
    return false;
  }

  ngOnInit() {
  }

}
