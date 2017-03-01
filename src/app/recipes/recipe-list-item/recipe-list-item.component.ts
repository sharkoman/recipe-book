import { Recipe } from '../recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-list-item',
  templateUrl: './recipe-list-item.component.html'
})
export class RecipeListItemComponent implements OnInit {
  
  @Input() recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
