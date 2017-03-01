import { Recipe } from './../recipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styles: []
})
export class RecipeDetailsComponent implements OnInit {
  
  @Input() selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
