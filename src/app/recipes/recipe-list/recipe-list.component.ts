import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [];

  recipe = new Recipe(
    'My Title',
    'My Disc',
    'http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png'
  );

  constructor() { }

  ngOnInit() {
  }

}
