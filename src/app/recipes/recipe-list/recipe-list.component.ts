import { RecipeDataService } from './../recipe-data.service';
import { Recipe } from './../recipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [];

  @Output() selected_recipe = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeDataService) {}

  ngOnInit() {
    this.recipes = this.recipeService.get_recipes();
  }

  selectedRecipe(recipe){
    this.selected_recipe.emit(recipe);
  }
  

}
